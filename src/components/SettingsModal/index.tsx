import { MutableRefObject, Ref, useEffect, useRef, useState } from 'react';
import { Overlay, Container, Btn } from './styles';
import { HiMenu, HiLogout } from 'react-icons/hi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { useTheme } from '../../hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { signOut } from 'next-auth/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
};

export const SettingsModal = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Btn onClick={() => setIsOpen(true)}>
        <HiMenu size={30} />
      </Btn>

      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <Overlay onClick={() => setIsOpen(false)}>
            <Container
              as={motion.div}
              variants={variants}
              initial='initial'
              animate='visible'
              exit='exit'
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Image
                src='/logo-full.svg'
                alt='Moveit logo'
                height='50px'
                width='200px'
                priority={true}
              />

              <p>Menu</p>

              <div>
                <button type='button' onClick={toggleTheme}>
                  {theme.type === 'light' ? <FiMoon /> : <FiSun />}
                  {theme.type === 'light' ? 'Escuro' : 'Claro'}
                </button>

                <Link href='/ranking' passHref>
                  <button type='button'>
                    <AiOutlineBarChart />
                    Ranking
                  </button>
                </Link>

                <button type='button' onClick={() => signOut()}>
                  <HiLogout />
                  Sair
                </button>
              </div>
            </Container>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};
