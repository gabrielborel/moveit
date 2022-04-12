/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Container,
  CountdownButton,
  FinishedButton,
  StopCountdownButton,
} from './styles';

let countdownTimeout: NodeJS.Timeout;

export const Countdown = () => {
  const [time, setTime] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => setIsActive(true);

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  };

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
            <CountdownButton type='button' onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
};
