import { useSelector } from 'react-redux'
import Layout from '../../components/layouts/Layout'
import ProfileInfo from '../../components/profile/ProfileInfo'
import Link from 'next/link'
import ProfileContent from '../../components/profile/ProfileContent'
import axios from 'axios'
import clientPromise from '../../lib/mongodb'

const Profile = ({ userData, userPosts }) => {
  const user = useSelector((state) => state.user.currentUser)

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

export default Profile

export const getServerSideProps = async (context) => {
  const userQuery = context.query.username

  // Attempting to connect to DB
  const client = await clientPromise
  const db = client.db('mainDB')
  const { username, bio, followers, following, isAdmin, isPrivate, fullName } =
    await db.collection('users').findOne({ username: userQuery })

  const posts = await db
    .collection('posts')
    .find({ username: userQuery })
    .toArray()

  try {
    // console.log('Attempting to fetch user')
    // const {
    //   data: { username, bio, followers, following, isAdmin, isPrivate },
    // } = await axios.get(`${BASE_URL}user/${userQuery}`)

    // const { data } = await axios.get(`${BASE_URL}post/${userQuery}`)

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
        userPosts: JSON.parse(JSON.stringify(posts)),
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
