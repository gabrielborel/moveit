import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/themes';
import GlobalStyles from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
