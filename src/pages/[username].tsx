import { useSelector } from 'react-redux'
import Layout from '../components/layouts/Layout'
import ProfileInfo from '../components/profile/ProfileInfo'
import Link from 'next/link'
import connectToDb from '../lib/connectToDb'
import User from '../models/User'

const Profile = ({ userData }) => {
  const user = useSelector((state) => state.user.currentUser)

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
      <section className="">
        <ProfileInfo />

        <div>
          <p>tabs</p>
        </div>
      </section>
    </Layout>
  )
}

export default Profile

export async function getServerSideProps(context) {
  await connectToDb()

  let user
  let userQuery = context.query.username

  try {
    user = await User.findOne({ username: userQuery }).lean()

    console.log(user)

    if (user) {
      return {
        props: {
          userData: user,
        },
      }
    } else {
      return {
        props: {
          userData: false,
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
