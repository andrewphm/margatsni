import { useSelector } from 'react-redux'
import Layout from '../components/layouts/Layout'
import ProfileInfo from '../components/profile/ProfileInfo'
import Link from 'next/link'
import connectToDb from '../lib/connectToDb'
import User from '../models/User'
import Post from '../models/Post'

const Profile = ({ userData }) => {
  const user = useSelector((state) => state.user.currentUser)

  console.log(userData)

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
      <ProfileInfo userData={userData} />
    </Layout>
  )
}

export default Profile

export async function getServerSideProps(context) {
  await connectToDb()

  let userQuery = context.query.username

  try {
    const user = await User.findOne({ username: userQuery })
    const userPosts = await Post.findOne({ username: userQuery })

    if (user) {
      if (!user.isPrivate) {
        return {
          props: {
            userData: {
              username: user.username,
              fullName: user.fullName,
              bio: user.bio || '',
              followers: user.followers.length,
              following: user.following.length,
              posts: userPosts?.items.length || 0,
            },
          },
        }
      }
    } else {
      return {
        props: {
          userData: {
            userData: false,
          },
        },
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        userData: false,
      },
    }
  }
}
