import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>naghshineh</title>
        <meta name="description" content="Home Page naghshineh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home Page
    </div>
  )
}

export default Home
