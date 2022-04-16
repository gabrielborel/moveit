import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useChallenges } from '../../../hooks/useChallenges';
import { useTheme } from '../../../hooks/useTheme';

import { Btn, Container } from './styles';
import { BsFillMoonFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

export const Profile = () => {
  const { level } = useChallenges();
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <Image
        src='https://github.com/gabrielborel.png'
        alt='Gabriel Borel'
        width='80px'
        height='80px'
        style={{ borderRadius: '50%' }}
      />
      <div>
        <strong>Gabriel Borel</strong>
        <p>
          <Image src='/icons/level.svg' alt='Level Icon' width='15px' height='15px' />
          <span>Level {level}</span>
        </p>
      </div>

      <AnimatePresence exitBeforeEnter initial={false}>
        <Btn
          as={motion.button}
          key={String(theme.type)}
          initial={{ y: -20, opacity: 0.8 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={toggleTheme}
        >
          {theme.type === 'light' ? (
            <BsFillMoonFill style={{ height: '25px', width: '25px' }} />
          ) : (
            <FiSun style={{ height: '25px', width: '25px', color: 'white' }} />
          )}
        </Btn>
      </AnimatePresence>
    </Container>
  );
};
