import Head from 'next/head';
import { ChallengeBox } from './ChallengeBox';
import { CompletedChallenges } from './CompletedChallenges';
import { Countdown } from './Countdown';
import { ExperienceBar } from './ExperienceBar';
import { Profile } from './Profile';
import { MainContent } from './styles';
import { motion } from 'framer-motion';
import React from 'react';
import { ChallengesProvider } from '../../contexts/ChallengesContext';
import { CountdownProvider } from '../../contexts/CountdownContext';

const variants = {
  container1: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

export const HomePage = () => {
  return (
    <ChallengesProvider>
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
            variants={variants.container2}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.8 }}
          >
            <ChallengeBox />
          </motion.div>
        </MainContent>
      </CountdownProvider>
    </ChallengesProvider>
  );
};
