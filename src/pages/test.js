import connectToDb from '../lib/connectToDb'
import User from '../models/User'

export default function Test({ test }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <p>This is a {test}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
  await connectToDb()

  const users = await User.find({})

  console.log(users)

  return {
    props: {
      test: 'test',
    },
  }
}
