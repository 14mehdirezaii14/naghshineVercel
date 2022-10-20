import { Html, Head, Main, NextScript } from 'next/document'
import { Suspense } from 'react'

import Loading from '../components/Loading/Loading'
export default function Document() {
    return (
        <Html >
            <Head />
            <body className='' >
                <Main />
                    <NextScript />
            </body>
        </Html>
    )
}