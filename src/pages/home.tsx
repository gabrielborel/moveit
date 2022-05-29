import { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import styled from 'styled-components';
import { ChallengeBox } from '../components/ChallengeBox';
import { ExperienceBar } from '../components/ExperienceBar';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { motion } from 'framer-motion';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { fauna } from '../services/fauna';
import { query as q } from 'faunadb';
import { MainContent } from '../styles/home.styles';

type faunaUser = {
  data: User;
};

type User = {
  email: string;
  challengesCompleted: number;
  level: number;
  currentExperience: number;
};

interface HomeProps {
  userData: User;
}

const Container = styled.div`
  height: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`;

const variants = {
  container1: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  },
  container2: {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }
};

export default function Home({ userData }: HomeProps) {
  return (
    <Container>
      <ChallengesProvider
        level={userData.level}
        currentExperience={userData.currentExperience}
        challengesCompleted={userData.challengesCompleted}
      >
        <Head>
          <title>Início | moveit</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <MainContent>
            <motion.div
              variants={variants.container1}
              initial='hidden'
              animate='visible'
              exit='exit'
            >
              {[
                <Profile key={1} />,
                <CompletedChallenges key={2} />,
                <Countdown key={3} />
              ].map((JSXComponent) => (
                <motion.div variants={variants.item} key={JSXComponent.key}>
                  {JSXComponent}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={variants.item}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ delay: 0.6 }}
            >
              <ChallengeBox />
            </motion.div>
          </MainContent>
        </CountdownProvider>
      </ChallengesProvider>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   };
  // }

  const user: faunaUser = await fauna.query(
    q.Get(
      q.Match(q.Index('user_by_email'), q.Casefold('biel_borel@hotmail.com'))
    )
  );

  const userData = {
    email: 'biel_borel@hotmail.com',
    level: user.data.level,
    currentExperience: user.data.currentExperience,
    challengesCompleted: user.data.challengesCompleted
  };

  return {
    props: {
      userData
    }
  };
};
