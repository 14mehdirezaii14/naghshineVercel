import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextWebVitalsMetric } from 'next/app'
import dynamic from 'next/dynamic'

const Line = dynamic(() => import('../components/Line/Line'))

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Line />
    <Component {...pageProps} />
  </>
}

export default MyApp
