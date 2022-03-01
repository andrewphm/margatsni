import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import connectToDb from '../lib/connectToDb.js'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Home: NextPage<{ isConnected: boolean }> = ({ isConnected }) => {
  const router = useRouter()

  // Client side validation if there is user, redirect to authentication if false
  const user = useSelector((state) => state.user?.currentUser)
  !user && router.push('/login')

  return (
    <div className="">
      <Head>
        <title>Margatsni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex  h-[3000px] w-screen flex-col justify-between">
        <Header></Header>
        <main>hi</main>
        <Footer></Footer>
      </div>
    </div>
  )
}

/* Retrieves pet(s) data from mongodb database */
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    connectToDb()
    return {
      props: { isConnected: true },
    }
  } catch (error) {
    console.log(error)

    return {
      props: { isConnected: false },
    }
  }
}

export default Home
