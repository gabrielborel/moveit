import GlobalStyles from '../styles/globalStyles';
import { CustomThemeProvider } from '../contexts/Theme';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <CustomThemeProvider>
        <GlobalStyles />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </CustomThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
