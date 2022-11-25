import { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import BottomSheetProvider from '@/components/organisms/BottomSheetProvider';
import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <>
            <Head>
                <meta name="viewport" content="user-scalable=no,width=device-width,initial-scale=1,maximum-scale=1" />
            </Head>
            <BottomSheetProvider>
                <Component {...pageProps} />
                <Toaster />
            </BottomSheetProvider>
        </>,
    );
}

export default MyApp;
