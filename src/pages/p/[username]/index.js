import connectToDb from '../../../lib/connectToDb'
import User from '../../../models/User'
import Link from 'next/link'
import Layout from '../../../components/layouts/Layout'
import ProfileInfo from '../../../components/profile/ProfileInfo'
import ProfileContent from '../../../components/profile/ProfileContent'
import Post from '../../../models/Post'

export default function Test({ userData }) {
  // // If user cannot be found.
  // if (!userData) {
  //   return (
  //     <Layout>
  //       <div className="my-10 mx-auto flex flex-col gap-y-5 px-10 text-center">
  //         <p className="text-2xl font-semibold">
  //           Sorry, this page isn't available.
  //         </p>

  //         <p>
  //           The link you followed may be broken, or the page may have been
  //           removed.{' '}
  //           <Link href="/">
  //             <a>
  //               <span className="cursor-pointer text-blue-btn">
  //                 Click here to go back home.
  //               </span>
  //             </a>
  //           </Link>
  //         </p>
  //       </div>
  //     </Layout>
  //   )
  // }

  return (
    <Layout>
      <section className="min-h-[80vh]">
        <p>{JSON.stringify(userData)}</p>
        <p>
          <br></br>
        </p>
        {/* <p>{JSON.stringify(userPosts)}</p> */}
        {/* <ProfileInfo userData={userData} userPosts={userPosts} />
        <ProfileContent userPosts={userPosts} /> */}
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  await connectToDb()
  const userQuery = context.query.username

  const {
    username,
    bio,
    followers,
    following,
    isAdmin,
    isPrivate,
    image,
    fullName,
  } = await User.findOne({ username: userQuery })

  // const userPosts = await Post.find({ username: userQuery })

  return {
    props: {
      userData: {
        username,
        bio,
        followers,
        following,
        isAdmin,
        isPrivate,
        image,
        fullName,
      },

      // userPosts: JSON.parse(JSON.stringify(userPosts)),
    },
  }
}
