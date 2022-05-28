import Image from 'next/image';
import { Container, Content } from '../styles/signin.styles';
import { GoMarkGithub } from 'react-icons/go';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { MouseEvent } from 'react';

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

export default function SignIn() {
  const handleSignInWithGithub = (e: MouseEvent) => {
    e.preventDefault();

    signIn('github', { callbackUrl: '/home' });
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
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='exit'
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
              <button onClick={(e) => handleSignInWithGithub(e)}>Entrar</button>
            </div>
          </Content>
        </Container>
      </main>
    </>
  );
}
