import { useEffect, useState } from 'react';
import { Container, CountdownButton } from './styles';

export const Countdown = () => {
  const [time, setTime] = useState(30 * 60);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const toggleCountdown = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
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

      <CountdownButton onClick={toggleCountdown}>
        {active ? 'Pausar o ciclo' : 'Iniciar um ciclo'}
      </CountdownButton>
    </>
  );
};
