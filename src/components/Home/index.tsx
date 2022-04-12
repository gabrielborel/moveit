import Head from 'next/head';
import { ChallengeBox } from './ChallengeBox';

import { CompletedChallenges } from './CompletedChallenges';
import { Countdown } from './Countdown';
import { ExperienceBar } from './ExperienceBar';
import { Profile } from './Profile';
import { MainContent } from './styles';

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>Início | moveit</title>
      </Head>

      <ExperienceBar />

      <MainContent>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
          <ChallengeBox />
        </div>
      </MainContent>
    </>
  );
};
