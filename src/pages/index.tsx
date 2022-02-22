import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import connectToDb from '../lib/connectToDb'

const Home: NextPage<{ isConnected: boolean }> = ({ isConnected }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Margatsni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Hello</p>
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
