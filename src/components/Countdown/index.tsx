import Image from 'next/image';
import { useCountdown } from '../../hooks/useCountdown';
import {
  Container,
  StartCountdownButton,
  FinishedButton,
  StopCountdownButton
} from './styles';

export const Countdown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <FinishedButton>
          Ciclo encerrado
          <Image
            src='/icons/check_circle.svg'
            width='40px'
            height='20px'
            alt='Check circle'
          />
        </FinishedButton>
      ) : (
        <>
          {isActive ? (
            <StopCountdownButton type='button' onClick={resetCountdown}>
              Abandonar ciclo
            </StopCountdownButton>
          ) : (
            <StartCountdownButton type='button' onClick={startCountdown}>
              Iniciar um ciclo
            </StartCountdownButton>
          )}
        </>
      )}
    </>
  );
};
