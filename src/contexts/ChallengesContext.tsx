import React, { createContext, ReactNode, useState } from 'react';

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

export const ChallengesContext = createContext({} as ChallengesContextData);
ChallengesContext.displayName = 'Challenges';

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        setLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
