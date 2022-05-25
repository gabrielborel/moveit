import { motion } from 'framer-motion';
import { useChallenges } from '../../hooks/useChallenges';
import { Container } from './styles';

const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useChallenges();

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
        <div
          style={{ transition: 'width, 1s', width: `${percentToNextLevel}%` }}
        />
        <span
          style={{ transition: 'left, 1s', left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};
