import { useState } from 'react';
import { Overlay, Container, Btn } from './styles';
import { HiMenu, HiLogout } from 'react-icons/hi';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { useTheme } from '../../hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  initial: {
    y: 10,
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
    y: 10,
    opacity: 0
  }
};

export const SettingsModal = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Btn onClick={() => setIsOpen(true)}>
        <HiMenu size={30} />
      </Btn>

      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <Overlay>
            <Container
              as={motion.div}
              variants={variants}
              initial='initial'
              animate='visible'
              exit='exit'
            >
              <p>Opções</p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
              >
                <BiArrowBack size={20} />
                Voltar
              </motion.button>

              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={toggleTheme}
                >
                  {theme.type === 'light' ? <FiMoon /> : <FiSun />}
                  {theme.type === 'light' ? 'Escuro' : 'Claro'}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => router.push('/ranking')}
                >
                  <AiOutlineBarChart />
                  Ranking
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => signOut()}
                >
                  <HiLogout />
                  Sair
                </motion.button>
              </div>
            </Container>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};
