import connectToDb from '../../lib/connectToDb'
import User from '../../models/User'

export default function Test({ user }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p>This is a {JSON.stringify(user)}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  await connectToDb()
  const userQuery = context.query.username
  const user = await User.find({ username: userQuery })

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  }
}
