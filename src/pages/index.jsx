import Head from 'next/head'
import connectToDb from '../lib/connectToDb.js'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/layouts/Layout'

// Components
import Sidebar from '../components/home/Sidebar'
import Timeline from '../components/home/Timeline'

const Home = ({ isConnected }) => {
  const router = useRouter()

  const user = useSelector((state) => state.user?.currentUser)

  return (
    <>
      <Head>
        <title>Margatsni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="mx-auto my-0 flex py-[30px]">
          <Timeline />
          <Sidebar />
        </section>
      </Layout>
    </>
  )
}

/* Retrieves pet(s) data from mongodb database */
export const getServerSideProps = async (context) => {
  try {
    await connectToDb()
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
