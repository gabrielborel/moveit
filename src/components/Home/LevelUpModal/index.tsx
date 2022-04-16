import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FiMousePointer } from 'react-icons/fi';
import { useChallenges } from '../../../hooks/useChallenges';
import { Container, Overlay } from './styles';

interface LevelUpModalProps {
  isVisible: boolean;
}

export const LevelUpModal = ({ isVisible }: LevelUpModalProps) => {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <AnimatePresence>
      {isVisible && (
        <Overlay>
          <Container
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <header>{level}</header>

            <strong>Parabéns</strong>
            <p>Você alcançou um novo level</p>

            <button type='button' onClick={closeLevelUpModal}>
              <Image
                src='/icons/close.svg'
                alt='Fechar modal'
                width='40px'
                height='40px'
              />
            </button>
          </Container>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
