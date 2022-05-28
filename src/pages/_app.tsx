import GlobalStyles from '../styles/globalStyles';
import { CustomThemeProvider } from '../contexts/Theme';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router
}: AppProps) {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <SessionProvider session={session}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </SessionProvider>
    </CustomThemeProvider>
  );
}

export default MyApp;
