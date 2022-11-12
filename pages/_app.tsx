import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextWebVitalsMetric } from 'next/app'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
const Line = dynamic(() => import('../components/Line/Line'), {
  ssr: false
})
const NavBar = dynamic(() => import('../components/navBar/NavBar'))

const Footer = dynamic(() => import('../components/Footer/Footer'))

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric)
}
const Loading = dynamic(() => import('../components/Loading/Loading'))
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
  }, [])
  return (
    <>
      <NavBar />

      <Line />
      {
        loading ? <>


          <Component  {...pageProps} />

        </> : <Loading />
      }
      <Footer />
    </>


  )
}

export default MyApp
