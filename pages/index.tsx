import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRef } from 'react'
const SvgLogo = dynamic(() => import('../components/svgLogo/SvgLogo'))

const loader = ({ src }: { src: string }) => {
  return src
}

const Home: NextPage = () => {
  const lazyRoot = useRef(null)
  return (
    <div className={styles.container}>
      <Head>
        <title>naghshineh</title>
        <meta name="description" content="Home Page naghshineh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container mx-auto py-5'>
        {/* head */}
        <SvgLogo />
        <div className={`text-center ${styles.HeaderHomeTitle} relative -top-80 text-center`}>
          <h1 className='HeaderHomeLine1'>
            CONNECTING
          </h1>
          <h2 className={`${styles.HeaderHomeLine2}`}>
            BRANDS WITH PEOPLE
          </h2>
        </div>
        {/*  */}
        <div className="grid grid-cols-12 gap-x-4 items-center ">
          <div className="md:col-span-8 sm:col-span-12 relative">
            <Link href='/'>
              <a>
                <Image src='/download.jpg' loader={loader} blurDataURL="blur" lazyRoot={lazyRoot} layout='responsive' height={400} width={800} className='hoverScale' />
              </a>
            </Link>
          </div>
          <div className="md:col-span-4 pl-16 sm:col-span-12">
            <Link href='/'>
              <a>
                <p className={`text-color-green relative mb-0 subTitle`}>hello</p>
                <p className='infoTitle'>
                  From Montreal to Lille, France. A creative leap over the Atlantic.</p>
              </a>
            </Link>
            <Link href='/'>
            <a className='btnGreen'>View Project</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
