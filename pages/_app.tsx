import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextWebVitalsMetric } from 'next/app'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'

const Line = dynamic(() => import('../components/Line/Line'), {
  ssr: false
})
const NavBar = dynamic(() => import('../components/navBar/NavBar'))

const Footer = dynamic(() => import('../components/Footer/Footer'))

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
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
    <Suspense fallback={'loading ...'}>
      <NavBar />
      <Line />
      <div className='Component'>
        <Component  {...pageProps} />
      </div>
      <Footer />
    </Suspense>
  )
}

export default MyApp
