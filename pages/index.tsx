import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import gsap from 'gsap'
import { Suspense, useEffect, useRef } from 'react'
import Loading from '../components/Loading/Loading'
import Router from 'next/router'
import homeAnimationChangePage from '../AnimationChangePage/homeAnimationChangePage'
const SvgLogo = dynamic(() => import('../components/svgLogo/SvgLogo'))
const BgTitleAnimation = dynamic(() => import('../components/BgTitleAnimation/BgTitleAnimation'))
const VideoColumn = dynamic(() => import('../components/VideoColumn/VideoColumn'))
const HeroSection = dynamic(() => import('../components/HeroSection/HeroSection'))
const SectionDotsBg = dynamic(() => import('../components/SectionDotsBg/SectionDotsBg'))

const Home: NextPage = () => {

  const videoColumnRef = useRef<HTMLDivElement>(null)
  const rowRef1 = useRef<HTMLDivElement>(null)

  const scrollEvent = () => {
    if (videoColumnRef?.current?.getBoundingClientRect().top) {
      if (videoColumnRef?.current?.getBoundingClientRect().top < 1000) {
        gsap.to(videoColumnRef.current, { opacity: 1, top: 0, duration: 0.5 });
      } else {
        gsap.to(videoColumnRef.current, { opacity: 0, top: 200, duration: 0.5 });
      }
    }
    if (rowRef1.current?.getBoundingClientRect().top) {
      if (rowRef1.current.getBoundingClientRect().top < 1000) {
        gsap.to(rowRef1.current, { opacity: 1, top: 0, duration: 0.5 });
      } else {
        gsap.to(rowRef1.current, { opacity: 1, top: 300, duration: 0.5 });
      }
    }
  }

  useEffect(() => {
    gsap.to('.Home', { opacity: 1, duration: 1 })
    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, [])
  // const AnimationChangePage = (e: any, to: string) => {
  //   e.preventDefault();
  //   gsap.to('.heroSectionImage', { right: "-800px", duration: 2 })
  //   gsap.to('.Home', { position: "relative", duration: 0.5 })
  //   // gsap.to('.Home > span , p, a ', { position: "relative", top: '70px', duration: 0.5 })
  //   gsap.to('.videoDiv', { right: "800px", duration: 2 })
  //   gsap.to('.Home', { opacity: 0, duration: 1 })
  //   setTimeout(() => {
  //     Router.push(`/${to}`)
  //   }, 1000)
  // }
  return (
    <>
      <Head>
        <title>naghshineh</title>
        <meta name="description" content="Home Page naghshineh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="Home opacity-0">
        <div className='container mx-auto py-5'>
          {/* head */}
          <SvgLogo />
          <div className={`text-center  ${styles.HeaderHomeTitle} relative -top-80 md:mb-0 sx:-mb-56 text-center`}>
            <h1 className={`${styles.HeaderHomeLine1}`}>
              CONNECTING
            </h1>
            <h2 className={`${styles.HeaderHomeLine2}`}>
              BRANDS WITH PEOPLE
            </h2>
          </div>
          {/*  */}
          <HeroSection src='/download-min.jpg'
            infoTitle='From Montreal to Lille, France. A creative leap over the Atlantic.'
            subTitle='hello'
            textBtn='view project' to='/' />
          {/*  */}
          <BgTitleAnimation keyUnique={'1'} words={['C', 'R', 'E', 'A', 'T', 'I', 'V', 'E']} dir={'ltr'} />
          {/* video column */}
          <div ref={videoColumnRef} className="grid relative sm:grid-cols-1 md:grid-cols-12 gap-x-12 items-center ">

            <div className="md:col-span-4 md:order-1 sx:order-2  sm:col-span-12 text-right">
              <Link href='/'>
                <a className='relative' >
                  <p className={`text-color-green  relative mb-0 subTitle subTitleAfter `}>hello</p>
                  <p className='infoTitle'>
                    From Montreal to Lille, France. A creative leap over the Atlantic.</p>
                </a>
              </Link>
              <Link href="#">
                <a className='btnGreen btnGreen inline' onClick={(e) => homeAnimationChangePage(e, 'contact-us')} >View Project</a>

              </Link>
            </div>
            <VideoColumn img={'https://i.vimeocdn.com/video/780757293-1c2ac502d89b659935c76cc89a7e76bc175c7276baa487b4d130bea6c11d50bb-d_1280'} />
          </div>
          {/*  */}
          <BgTitleAnimation keyUnique={'2'} words={['a', 'c', 't', 'i', 'v', 'a', 't', 'i', 'o', 'n']} dir={'rtl'} />
          <div ref={rowRef1} className=' relative'>
            <HeroSection src='/download-min.jpg'
              infoTitle='From Montreal to Lille, France. A creative leap over the Atlantic.'
              subTitle='hello'
              textBtn='view project' to='/' />
          </div>
          {/*  */}
          <div className="grid grid-cols-1 text-center justify-center">
            <BgTitleAnimation keyUnique={'3'} words={['E', '_', 'C', 'O', 'M', 'M', 'E', 'R', 'C']} dir={'rtl'} />
            <div className='z-10'>
            <Link href="#">
                <a className='btnGreen btnGreen inline' onClick={(e) => homeAnimationChangePage(e, 'contact-us')} >View Project</a>

              </Link>
            </div>
          </div>
          {/*  */}
        </div>
        <SectionDotsBg />
      </div>
    </ >
  )
}



export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
