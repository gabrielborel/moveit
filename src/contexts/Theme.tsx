import { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);
ThemeContext.displayName = 'Theme';

export const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('theme'));
    setIsDark(isDark);
  }, []);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    localStorage.setItem('theme', JSON.stringify(!isDark));
    setIsDark((state: any) => !state);
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
