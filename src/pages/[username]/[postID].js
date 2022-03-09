import connectToDb from '../../lib/connectToDb'
import Post from '../../models/Post'
import Layout from '../../components/layouts/Layout'

const UserPost = () => {
  return (
    <Layout>
      <div>hihihi</div>
    </Layout>
  )
}

export default UserPost

export async function getServerSideProps(context) {
  await connectToDb()

  let postID = context.query.postID
  let userQuery = context.query.username

  let userPosts = await Post.findOne({ username: userQuery })

  // Serialize results
  userPosts = JSON.parse(JSON.stringify(userPosts))

  console.log(userPosts)
  console.log('Post id: ', postID)
  console.log('Username: ', userQuery)

  // 1. queryDB for users posts
  // 2. query posts matching postID

  return {
    props: {
      true: true,
    },
  }
}
