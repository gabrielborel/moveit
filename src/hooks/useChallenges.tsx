import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export const useChallenges = () => {
  const { level, setLevel, currentExperience, challengesCompleted } =
    useContext(ChallengesContext);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => alert(`hi`);

  return {
    level,
    levelUp,
    currentExperience,
    startNewChallenge,
    challengesCompleted,
  };
};
