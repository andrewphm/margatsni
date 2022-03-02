import { useSelector } from 'react-redux'
import Layout from '../components/layouts/Layout'
import ProfileInfo from '../components/profile/ProfileInfo'
import Link from 'next/link'

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
                <span className="cursor-pointer text-blue-400">
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
  let userData
  // Get user data from params

  return {
    props: {
      userData: userData || false,
    },
  }
}
