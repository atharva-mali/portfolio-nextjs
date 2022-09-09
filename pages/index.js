import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atharva | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />

    </div>
  )
}
