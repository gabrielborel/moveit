import Image from 'next/image';
import { useContext } from 'react';
import { ChallengesContext } from '../../../contexts/ChallengesContext';
import {
  ChallengeFailedBtn,
  ChallengeSucceededBtn,
  Container,
  ChallengeActive,
  ChallengeNotActive
} from './styles';

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
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
            <ChallengeFailedBtn type='button' onClick={resetChallenge}>
              Falhei
            </ChallengeFailedBtn>
            <ChallengeSucceededBtn type='button'>
              Completei
            </ChallengeSucceededBtn>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
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
    </Container>
  );
};
