import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export const useChallenges = () => {
  const context = useContext(ChallengesContext);

  return context;
};
