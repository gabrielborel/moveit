import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContext';
import { Container } from './styles';

const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Container
      as={motion.div}
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{ delay: 1 }}
    >
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};
