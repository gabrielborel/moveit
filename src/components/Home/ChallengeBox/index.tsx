import Image from 'next/image';
import { useChallenges } from '../../../hooks/useChallenges';
import {
  ChallengeFailedBtn,
  ChallengeSucceededBtn,
  Container,
  ChallengeActive,
  ChallengeNotActive,
} from './styles';

export const ChallengeBox = () => {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <Image
              src='/icons/body.svg'
              alt='body'
              width='140px'
              height='120px'
            />

            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <ChallengeFailedBtn type='button'>Falhei</ChallengeFailedBtn>
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
