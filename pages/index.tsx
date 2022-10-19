import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
const SvgLogo = dynamic(() => import('../components/svgLogo/SvgLogo'))
const BgTitleAnimation = dynamic(() => import('../components/BgTitleAnimation/BgTitleAnimation'))
const VideoColumn = dynamic(() => import('../components/VideoColumn/VideoColumn'))
const CanvasDotsBackground = dynamic(() => import('../components/CanvasDotsBackground/CanvasDotsBackground'))

const Home: NextPage = () => {
  const lazyRoot = useRef<HTMLHeadingElement>(null)
  const videoColumnRef = useRef<HTMLDivElement>(null)
  const rowRef1 = useRef<HTMLDivElement>(null)
  const scrollEvent = () => {
    if (videoColumnRef?.current?.getBoundingClientRect().top) {
      if (videoColumnRef?.current?.getBoundingClientRect().top < 600) {
        gsap.to(videoColumnRef.current, { zIndex: 10, opacity: 1, top: 0, duration: 0.5 });
      } else {
        gsap.to(videoColumnRef.current, { opacity: 0, top: 200, duration: 0.5 });
      }
    }
    if (rowRef1.current?.getBoundingClientRect().top) {
      if (rowRef1.current.getBoundingClientRect().top < 600) {
        gsap.to(rowRef1.current, { zIndex: 10, opacity: 1, top: 0, duration: 0.5 });
      } else {
        gsap.to(rowRef1.current, { opacity: 0, top: 200, duration: 0.5 });
      }
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, [])
  return (
    <>
      <Head>
        <title>naghshineh</title>
        <meta name="description" content="Home Page naghshineh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container  mx-auto py-5'>
        {/* head */}
        <SvgLogo />
        <div className={`text-center z-30 ${styles.HeaderHomeTitle} relative -top-80 md:mb-0 sx:-mb-56 text-center`}>
          <h1 className={`${styles.HeaderHomeLine1}`}>
            CONNECTING
          </h1>
          <h2 className={`${styles.HeaderHomeLine2}`}>
            BRANDS WITH PEOPLE
          </h2>
        </div>
        {/*  */}
        <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-x-12 z-30  items-center ">
          <div className="md:col-span-8 sm:col-span-12 relative text-right z-30" >
            <Link href='/'>
              <a>
                <div className="divImg">
                  <Image placeholder='blur' alt="Logo" src='/download.jpg' blurDataURL='/download.jpg'  lazyRoot={lazyRoot} height={400} width={800} className='hoverScale right-0 bg-gray-500 w-full block' />
                </div>
              </a>
            </Link>
          </div>
          <div className="md:col-span-4  sm:col-span-12">
            <Link href='/'>
              <a>
                <p className={`text-color-green relative mb-0 subTitle subTitleBrfore`}>hello</p>
                <p className='infoTitle'>
                  From Montreal to Lille, France. A creative leap over the Atlantic.</p>
              </a>
            </Link>
            <Link href='/' >
              <a className='btnGreen ' >View Project</a>
            </Link>
          </div>
        </div>
        {/*  */}
        <BgTitleAnimation keyUnique={'1'} words={['C', 'R', 'E', 'A', 'T', 'I', 'V', 'E']} dir={'ltr'} />
        {/* video column */}
        <div ref={videoColumnRef} className="grid relative sm:grid-cols-1 md:grid-cols-12 gap-x-12 items-center ">

          <div className="md:col-span-4 md:order-1 sx:order-2  sm:col-span-12 text-right">
            <Link href='/'>
              <a className='relative'>
                <p className={`text-color-green  relative mb-0 subTitle subTitleAfter `}>hello</p>
                <p className='infoTitle'>
                  From Montreal to Lille, France. A creative leap over the Atlantic.</p>
              </a>
            </Link>
            <Link href='/' >
              <a className='btnGreen' >View Project</a>
            </Link>
          </div>
          <VideoColumn img={'https://i.vimeocdn.com/video/780757293-1c2ac502d89b659935c76cc89a7e76bc175c7276baa487b4d130bea6c11d50bb-d_1280'} />
        </div>
        {/*  */}
        <BgTitleAnimation keyUnique={'2'} words={['a', 'c', 't', 'i', 'v', 'a', 't', 'i', 'o', 'n']} dir={'rtl'} />
        <div ref={rowRef1} className="grid sm:grid-cols-1 md:grid-cols-12 gap-x-12 items-center ">
          <div className="md:col-span-8 sm:col-span-12 relative" >
            <Link href='/'>
              <a>
                <div className="divImg">
                  <Image placeholder='blur' alt="Logo" src='/download.jpg' blurDataURL='/download.jpg'  lazyRoot={lazyRoot} height={400} width={800} className='hoverScale right-0 bg-gray-500 z-30 w-full block' />
                </div>
              </a>
            </Link>
          </div>
          <div className="md:col-span-4  sm:col-span-12">
            <Link href='/'>
              <a>
                <p className={`text-color-green relative mb-0 subTitle subTitleBrfore`}>hello</p>
                <p className='infoTitle'>
                  From Montreal to Lille, France. A creative leap over the Atlantic.</p>
              </a>
            </Link>
            <Link href='/' >
              <a className='btnGreen  z-50' >View Project</a>
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 text-center justify-center">
          <BgTitleAnimation keyUnique={'3'} words={['E', '_', 'C', 'O', 'M', 'M', 'E', 'R', 'C']} dir={'rtl'} />
          <div className='z-40'>
            <Link href='/' >
              <a className='btnGreen inline  ' >View Project</a>
            </Link>
          </div>
        </div>
        {/*  */}

      </div>
      <div className='  relative  sectionBlog' style={{
        background: '#1d1d20',
        color: 'black !important'
      }} >
        <div className='container  mx-auto  relative' >
        <CanvasDotsBackground />
          <BgTitleAnimation keyUnique={'4'} words={['b', 'l', 'o', 'g']} dir={'rtl'} />
          <div className='text-white relative md:-top-20 sx:top-0 text-center  grid grid-cols-12 -mb-16'>
            <div className='md:col-span-4 sx:col-span-12 ' ><p className='text-left' style={{
              position: 'relative',
              fontSize: '35px',
              textTransform: 'uppercase',
              fontWeight: 500,
              letterSpacing: '.06em',

            }}>BREAKING NEWS</p></div>
            <div className="md:col-span-8 sx:col-span-12">
              <p className='text-left' style={{
                fontWeight: 400

              }}>Whats going on at Bite Size, you ask?
                <br />
                Well, here are some of the stories our team is proud to share with the world.</p>
            </div>
          </div>
          <div className="container mx-auto md:mt-0 sx:mt-20">
            <div className="grid gap-6 md:grid-cols-3 sx:grid-cols-1  relative">
              <div className='colSectionBlog '>
                <Image alt='alt' className='imgSectionBlog' blurDataURL='/download.jpg'  lazyRoot={lazyRoot} src={'/blog.webp'} width={500} height={500} />
                <div className='p-3 relaive textColSectionBlog'>
                  <p className='text-color-green subTitleSectionBlog subTitleBrfore'>
                    4th of October 2022</p>
                  <p className='text-white dialogSectionBlog'>
                    Gen Z in Canada - A Starting Point  For A Dialogue. </p>
                </div>
              </div>
              {/*  */}
              <div className='colSectionBlog '>
                <Image placeholder='blur' alt='alt' className='imgSectionBlog'blurDataURL='/download.jpg'   lazyRoot={lazyRoot} src={'/blog.webp'} width={500} height={500} />
                <div className='p-3 relaive textColSectionBlog'>
                  <p className='text-color-green subTitleSectionBlog subTitleBrfore'>
                    4th of October 2022</p>
                  <p className='text-white dialogSectionBlog'>
                    Gen Z in Canada - A Starting Point  For A Dialogue. </p>
                </div>
              </div>
              {/*  */}
              <div className='colSectionBlog '>
                <Image placeholder='blur' alt='alt' className='imgSectionBlog' blurDataURL='/download.jpg'  lazyRoot={lazyRoot} src={'/blog.webp'} width={500} height={500} />
                <div className='p-3 relaive textColSectionBlog'>
                  <p className='text-color-green subTitleSectionBlog subTitleBrfore'>
                    4th of October 2022</p>
                  <p className='text-white dialogSectionBlog'>
                    Gen Z in Canada - A Starting Point  For A Dialogue. </p>
                </div>
              </div>

            </div>
          </div>
        </div>
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
