import Head from 'next/head';
import dbConnect from 'src/lib/dbConnect';
import apiCalls from 'src/apiCalls';
import Header from '../components/common/Header';
import Timeline from '~/components/home/Timeline';
import Sidebar from '~/components/home/Sidebar';
import { jwtVerify } from 'jose';
import dynamic from 'next/dynamic';

const Home = ({ timelinePosts }) => {
  /*
  Encountering a very strange bug where Nextjs Severless function will time-out if these UI components are not dynamically imported after the severless function completes.
  */
  const Timeline = dynamic(() => import('../components/home/Timeline.jsx'));
  const Sidebar = dynamic(() => import('../components/home/Sidebar.jsx'));
  const Header = dynamic(() => import('../components/common/Header'));

  return (
    <>
      <Head>
        <title>Margatsni</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Header />
        <section className="mx-auto my-0 max-w-5xl w-full  max-h-[90%] flex relative overflow-hidden">
          <Timeline timelinePosts={timelinePosts} />
          <Sidebar />
        </section>
      </>
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const token = context.req.cookies['user-token'];
  const jwtSecret = process.env.JWT_SEC;

  try {
    await dbConnect();
    const {
      payload: { username },
    } = await jwtVerify(token, new TextEncoder().encode(jwtSecret));

    const { data: timelinePosts } = await apiCalls.fetchTimeline(username);

    return {
      props: {
        timelinePosts: JSON.parse(JSON.stringify(timelinePosts)),
      },
    };
  } catch (error) {
    console.log(error);
  }
}
