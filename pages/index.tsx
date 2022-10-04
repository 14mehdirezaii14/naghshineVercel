import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
        <div className="grid grid-cols-12 ">
        <div className="col-span-8 relative">
            <Image src='/download.jpg' loader={loader} lazyRoot={lazyRoot} layout='responsive' height={300} width={800} className='w-100' />

          </div>
          <div className="col-span-4">
            hello
          </div>
          


        </div>
      </div>
    </div>
  )
}

export default Home
