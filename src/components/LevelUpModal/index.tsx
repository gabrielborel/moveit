import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useChallenges } from '../../hooks/useChallenges';
import { Container, Overlay } from './styles';
import { BsTwitter } from 'react-icons/bs';

interface LevelUpModalProps {
  isVisible: boolean;
}

export const LevelUpModal = ({ isVisible }: LevelUpModalProps) => {
  const { level, closeLevelUpModal } = useChallenges();

  return (
    <AnimatePresence>
      {isVisible && (
        <Overlay
          onClick={(e) => {
            const target = e.target.className;
            if (target.includes('Overlay')) {
              closeLevelUpModal();
            }
          }}
        >
          <Container
            as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              type='button'
              className='close-modal'
              onClick={closeLevelUpModal}
            >
              <Image
                src='/icons/close.svg'
                alt='Fechar modal'
                width='40px'
                height='40px'
              />
            </button>

            <header>{level}</header>

            <strong>Parabéns</strong>
            <p>Você alcançou um novo level</p>

            <a
              href='https://twitter.com/intent/tweet?text=Vejam só!! Acabei de avançar de level <image />'
              rel='noopener noreferrer'
              target='_blank'
              className='twitter-share-button twitter'
            >
              <BsTwitter size={20} />
              Compartilhe no twitter
            </a>
          </Container>
        </Overlay>
      )}
    </AnimatePresence>
  );
};
