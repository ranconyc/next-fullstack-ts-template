import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPageWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
function MyApp({ Component, pageProps }: AppPageWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
