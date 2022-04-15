import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
