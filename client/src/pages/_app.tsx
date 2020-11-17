import * as React from 'react';
import type { AppProps } from 'next/app'
import WrapMarkUp from "../components/WrapMarkUp";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <WrapMarkUp>
            <Component {...pageProps} />
        </WrapMarkUp>
    )
}

export default MyApp
