import type { AppProps } from 'next/app';

import Image from 'next/image';
import { usePageView } from '../hooks/usePageView';
function MyApp({ Component, pageProps }: AppProps) {
    // Google Analytics の PV をカウントするイベント
    usePageView();

    return (
        <>
            <Component {...pageProps} />;
            <div
                style={{
                    width: '100%',
                }}>

                    <Image
                    style={{
                        width: '25%',
                        margin: '0 auto',
                    }}
                        src="/img/logo_wide.png"
                        alt="logo"
                        width={ 500 }
                        height={ 500 }
                    />
            </div>
        </>
    );
}
export default MyApp;
