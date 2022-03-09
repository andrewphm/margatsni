import { useSelector } from 'react-redux'
import Layout from '../../components/layouts/Layout'
import ProfileInfo from '../../components/profile/ProfileInfo'
import Link from 'next/link'
import connectToDb from '../../lib/connectToDb'
import User from '../../models/User'
import Post from '../../models/Post'
import ProfileContent from '../../components/profile/ProfileContent'

const Profile = ({ userData, userPosts }) => {
  const user = useSelector((state) => state.user.currentUser)

  // If user cannot be found.
  if (!userData.username) {
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
    const items = JSON.parse(JSON.stringify(userPosts.items))

    if (user) {
      if (!user.isPrivate) {
        console.log('firing first')
        return {
          props: {
            userData: {
              username: user.username,
              fullName: user.fullName,
              bio: user.bio || '',
              followers: user.followers.length,
              following: user.following.length,
              posts: userPosts?.items.length || 0,
              isPrivate: user.isPrivate,
            },
            userPosts: {
              items,
              username: user.username,
            },
          },
        }
      } else {
        // User is private, so only return user info.
        return {
          props: {
            userData: {
              username: user.username,
              fullName: user.fullName,
              bio: user.bio || '',
              followers: user.followers.length,
              following: user.following.length,
              posts: userPosts?.items.length || 0,
              isPrivate: user.isPrivate,
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
    console.log('firing: ', error)
    return {
      props: {
        userData: false,
      },
    }
  }
}
