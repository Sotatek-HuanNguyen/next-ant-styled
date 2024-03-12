import Authentication from '@/hoc/authentication';
import { store } from '@/stores/store';
import { getThemeConfig } from '@/styles/theme-config';
import GlobalStyle from '@/styles/theme-global';
import { Page } from '@/types/page';
import { QueryClientProvider, queryClient } from '@/utils/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, App as FeedbackProvider } from 'antd';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'typeface-montserrat';

import RootLayout from '../layouts';

type Props = AppProps & {
  Component: Page;
};

const persistor = persistStore(store);

function App({ Component, pageProps }: Props) {
  const Layout =
    (Component as Page).layout ||
    (({ children }: { children: ReactNode }) => <RootLayout>{children}</RootLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NEXT_PUBLIC_NODE_ENV === 'development' && <ReactQueryDevtools />}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <ConfigProvider theme={getThemeConfig('light')}>
            <FeedbackProvider>
              <Authentication>
                <Layout>
                  <NextNProgress />
                  <Component {...pageProps} />
                </Layout>
              </Authentication>
            </FeedbackProvider>
          </ConfigProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
