import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html className='bg-gray-800'>
            <Head />
            <body className='container mx-auto' style={{ height: "3000px" }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}