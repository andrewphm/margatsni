import Post from '../../../../models/Post'
import connectToDb from '../../../../lib/connectToDb'

export default async function (req) {
  await connectToDb()

  const {
    method,
    query: { id },
  } = req

  try {
    const post = await Post.findOne({ _id: id })

    post.comments.push(body.req)

    const savedPost = await post.save()

    res.status(200).json(savedPost)
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to post comment.' })
  }
}
