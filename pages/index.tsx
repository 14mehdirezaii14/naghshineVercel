import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CanvasDotsBackground from '../components/CanvasDotsBackground/CanvasDotsBackground'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>naghshineh</title>
        <meta name="description" content="Home Page naghshineh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home Page
      <div className='overflow-hidden bg-black  '>
        <CanvasDotsBackground />
      </div>
    </div>
  )
}

export default Home
