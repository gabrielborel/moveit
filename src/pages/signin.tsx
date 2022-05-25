import Image from 'next/image';
import { Container, Content } from '../styles/signin.styles';
import { GoMarkGithub } from 'react-icons/go';
import { motion } from 'framer-motion';
import { getSession, signIn } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function SignInPage() {
  const handleSignInWithGithub = () => {
    try {
      signIn('github');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>SignIn | moveit</title>
      </Head>

      <main>
        <Container>
          <Content
            as={motion.div}
            initial={{
              y: 10,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8
              }
            }}
            exit={{
              y: 10,
              opacity: 0
            }}
          >
            <Image
              src='/logo-full.svg'
              alt='Moveit logo'
              width='300px'
              height='150px'
            />

            <div className='login'>
              <GoMarkGithub className='icon' />

              <p>Entrar com github</p>
              <button type='submit' onClick={handleSignInWithGithub}>
                Entrar
              </button>
            </div>
          </Content>
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};
