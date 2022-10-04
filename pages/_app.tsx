import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextWebVitalsMetric } from 'next/app'
import dynamic from 'next/dynamic'

import { useEffect } from 'react'
import gsap from 'gsap'

const Line = dynamic(() => import('../components/Line/Line'), {
  ssr: false
})
const NavBar = dynamic(() => import('../components/navBar/NavBar'))

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    gsap.fromTo(".Component", {
      opacity: 0
    }, {
      y: 0,
      top: 0,
      duration: 1,
      opacity: 1
    });
  }, [])
  return (
    <>
      <NavBar />
      <Line />
      <div className='Component'>
        <Component  {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
