import { useSelector } from 'react-redux'
import Layout from '../components/layouts/Layout'
import ProfileInfo from '../components/profile/ProfileInfo'

const Profile = ({ userData }) => {
  const user = useSelector((state) => state.user.currentUser)

  console.log(userData)
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
