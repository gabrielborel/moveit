/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { fauna } from '../services/fauna';
import { query as q } from 'faunadb';
import { Container, Heading, Leaderboard } from '../styles/ranking.styles';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getSession } from 'next-auth/react';

interface User {
  name: string;
  email: string;
  image: string;
  challengesCompleted: number;
  level: number;
  currentExperience: number;
}

interface RankingPageProps {
  users: User[];
}

const variants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    y: 20,
    opacity: 0
  }
};

export default function RankingPage({ users }: RankingPageProps) {
  return (
    <>
      <Head>
        <title>Ranking | moveit</title>
      </Head>

      <main>
        <Container>
          <Heading
            as={motion.div}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <p>Ranking</p>
            <Link href='/home' passHref>
              <motion.button whileHover={{ scale: 1.05, color: '#4953b8' }}>
                <BiArrowBack />
                Voltar para home
              </motion.button>
            </Link>
          </Heading>

          <Leaderboard
            as={motion.div}
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <div className='table-heading'>
              <p>Posição</p>
              <p>Usuário</p>
              <p>Desafios</p>
              <p>Experiência</p>
            </div>

            {users.map((user, id) => (
              <div className='user-row' key={id}>
                <span className='position'>{id + 1}</span>

                <div className='user-data'>
                  <img className='user-image' src={user.image} alt='yeah' />
                  <div className='user'>
                    <p className='name'>{user.name}</p>
                    <p className='level'>
                      <img
                        src='/icons/level-up.svg'
                        alt='Level up'
                        style={{ width: '15px', height: '15px' }}
                      />
                      Level {user.level}
                    </p>
                  </div>

                  <p className='challenges'>
                    <span>{user.challengesCompleted}</span> completados
                  </p>

                  <p className='experience'>
                    <span>{user.currentExperience}</span> xp
                  </p>
                </div>
              </div>
            ))}
          </Leaderboard>

          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='logo'
          >
            <Image
              src='/logo-full.svg'
              alt='Moveit Logo'
              width='300px'
              height='50px'
            />
          </motion.div>
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const fetchedUsers = await fauna.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda((x) => q.Get(x))
    )
  );

  const usersData = fetchedUsers.data.map((fetchedUser) => fetchedUser.data);
  const users = usersData.sort(
    (userA: User, userB: User) =>
      userB.challengesCompleted - userA.challengesCompleted
  );

  return {
    props: { users }
  };
};
