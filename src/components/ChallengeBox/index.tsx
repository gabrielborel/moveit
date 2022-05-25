import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useChallenges } from '../../hooks/useChallenges';
import { useCountdown } from '../../hooks/useCountdown';
import {
  ChallengeFailedBtn,
  ChallengeSucceededBtn,
  Container,
  ChallengeActive,
  ChallengeNotActive
} from './styles';

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useChallenges();
  const { resetCountdown } = useCountdown();

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <Container>
      <AnimatePresence exitBeforeEnter initial={false}>
        {activeChallenge ? (
          <ChallengeActive
            as={motion.div}
            key='Active Challenge'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <Image
                src={`/icons/${activeChallenge.type}.svg`}
                alt='body'
                width='140px'
                height='120px'
              />

              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <ChallengeFailedBtn type='button' onClick={handleChallengeFailed}>
                Falhei
              </ChallengeFailedBtn>
              <ChallengeSucceededBtn
                type='button'
                onClick={handleChallengeSucceeded}
              >
                Completei
              </ChallengeSucceededBtn>
            </footer>
          </ChallengeActive>
        ) : (
          <ChallengeNotActive
            as={motion.div}
            key='Not Active Challenge'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <Image
                src='/icons/level-up.svg'
                alt='Level up'
                width='100px'
                height='60px'
              />
              Avance de level completando desafios
            </p>
          </ChallengeNotActive>
        )}
      </AnimatePresence>
    </Container>
  );
};
