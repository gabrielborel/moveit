import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

export const useChallenges = () => {
  const context = useContext(ChallengesContext);

  return context;
};
