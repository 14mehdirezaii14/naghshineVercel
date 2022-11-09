import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html className='font-BebasNeue'>
            <Head >
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            </Head>
            <body className='font-BebasNeue' >
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}