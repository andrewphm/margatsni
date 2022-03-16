import Post from '../../models/Post'
import User from '../../models/User'
import Layout from '../../components/layouts/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import mongoose from 'mongoose'
import MobilePost from '../../components/post/MobilePost'
import DesktopPost from '../../components/post/DesktopPost'

const UserPost = ({ userPosts, post, userData }) => {
  // If user post cannot be found
  if (!post) {
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

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleChange = () => {
    setWindowSize((prev) => window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleChange)

    return () => {
      window.removeEventListener('resize', handleChange)
    }
  }, [])

  return (
    <Layout>
      {/* Mobile render */}
      {windowSize < 767 && <MobilePost post={post} userData={userData} />}

      {/* Desktop render */}
      {windowSize > 767 && <DesktopPost post={post} userData={userData} />}
    </Layout>
  )
}

export default UserPost

export const getServerSideProps = async (context) => {
  if (mongoose.connection.readyState !== 1) {
    console.log('Connecting to db')
    const db = await mongoose
      .connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      })
      .then(() => console.log('Connected to db!'))
  }

  let userQuery = context.query.username
  let userPosts = await Post.findOne({ username: userQuery })
  // Serialize results
  userPosts = JSON.parse(JSON.stringify(userPosts))
  let userData = await User.findOne({ username: userQuery })

  let postID = context.query.postID
  let post = userPosts.items.filter((item) => {
    return item._id === postID
  })[0]

  return {
    props: {
      userPosts,
      post: post || null,
      userData: {
        username: userData.username,
        image: userData.image,
      },
    },
  }
}
