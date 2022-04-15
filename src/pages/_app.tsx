import GlobalStyles from '../styles/globalStyles';
import { CustomThemeProvider } from '../contexts/Theme';

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;
