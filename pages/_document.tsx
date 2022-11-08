import { Html, Head, Main, NextScript } from 'next/document'
import { Suspense } from 'react'

import Loading from '../components/Loading/Loading'
export default function Document() {
    return (
        <Html className='font-BebasNeue'>
            <Head >
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

            </Head>
            <body className='font-BebasNeue' >
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}