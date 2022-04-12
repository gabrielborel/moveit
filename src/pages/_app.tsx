import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import GlobalStyles from '../styles/globalStyles';
import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <ChallengesProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
