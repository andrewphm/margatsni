import dbConnect from 'src/lib/dbConnect';
import apiCalls from 'src/apiCalls';
import { jwtVerify } from 'jose';
import dynamic from 'next/dynamic';
import Timeline from '~/components/home/Timeline.jsx';
import Sidebar from '~/components/home/Sidebar.jsx';
import Header from '~/components/common/Header.jsx';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Margatsni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />
        <section className="mx-auto my-0 max-w-5xl w-full  max-h-[90%] flex relative justify-center lg1:mt-6">
          <Timeline />
          <Sidebar />
        </section>
      </>
    </>
  );
};

export default Home;
