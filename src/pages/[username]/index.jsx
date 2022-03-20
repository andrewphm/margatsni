import { useSelector } from 'react-redux'
import Layout from '../../components/layouts/Layout'
import ProfileInfo from '../../components/profile/ProfileInfo'
import Link from 'next/link'
import ProfileContent from '../../components/profile/ProfileContent'
import axios from 'axios'
import mongoose from 'mongoose'
import User from '../../models/User'
import Post from '../../models/Post'
import connectToDb from '../../lib/connectToDb'

export default function Profile({ userData, userPosts }) {
  // If user cannot be found.
  if (!userData) {
    return (
      <Layout>
        <div className="my-10 mx-auto flex flex-col gap-y-5 px-10 text-center">
          <p className="text-2xl font-semibold">
            Sorry, this page isn't available.
          </p>

          <p>
            The link you followed may be broken, or the page may have been
            removed.{' '}
            <Link href="/">
              <a>
                <span className="cursor-pointer text-blue-btn">
                  Click here to go back home.
                </span>
              </a>
            </Link>
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <section className="min-h-[80vh]">
        <ProfileInfo userData={userData} userPosts={userPosts} />
        {userData.isPrivate ? (
          <div className="mx-auto flex w-full flex-col border-y border-neutral-300  bg-white md:max-w-4xl">
            <div className="mx-auto flex flex-col py-10 text-center">
              <p className="text-sm font-semibold">This Account is Private</p>
              <p className="text-sm">Follow to see their photos and videos.</p>
            </div>
          </div>
        ) : (
          <ProfileContent userPosts={userPosts} />
        )}
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const userQuery = context.query.username
  if (process.env.NODE === 'production') {
    await mongoose.connect(process.env.MONGODB_URI).then((conn) => {
      console.log('In production mode, creating new connection for SSR!')
      return conn
    })
  } else {
    await connectToDb()
  }

  try {
    const { username, bio, followers, following, isAdmin, isPrivate } =
      await User.findOne({ username: userQuery })

    const userPosts = await Post.find({ username: userQuery })

    return {
      props: {
        userData: {
          username,
          bio,
          followers,
          following,
          isAdmin,
          isPrivate,
        },
        userPosts: JSON.parse(JSON.stringify(userPosts)),
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        userData: null,
      },
    }
  }
}
