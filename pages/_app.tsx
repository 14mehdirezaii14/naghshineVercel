import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextWebVitalsMetric } from 'next/app'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
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
  const scrollEvent = (event: any) => {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 40; //controls the scroll wheel range/speed
    else if (event.detail) delta = -event.detail / 40;

    handle(delta);
    event.returnValue = false;
  }
  var goUp = true;
  let end: any = null;
  var interval: any = null;
  function handle(delta: any) {
    var animationInterval = 20; //controls the scroll animation after scroll is done
    var scrollSpeed = 20; //controls the scroll animation after scroll is done

    if (end == null) {
      end = window.scroll();
    }
    end -= 20 * delta;
    goUp = delta > 0;

    if (interval == null) {
      interval = setInterval(function () {
        var scrollTop = window.scrollY;
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (scrollTop <= 0 ||
          goUp && step > -1 ||
          !goUp && step < 1) {
          clearInterval(interval);
          interval = null;
          end = null;
        }
        window.scroll(0, scrollTop + step);
      }, animationInterval);
    }
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // window.addEventListener('wheel', scrollEvent);
       window.addEventListener('wheel', () => {
        console.log('eventّ')
       }, false);
    }, 1000)
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };

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
