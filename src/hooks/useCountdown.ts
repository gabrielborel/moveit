import { useContext } from 'react';
import { CountdownContext } from './../contexts/CountdownContext';

export const useCountdown = () => {
  const context = useContext(CountdownContext);

  return context;
};
