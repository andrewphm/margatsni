import connectToDb from '../../../lib/connectToDb'
import Post from '../../../models/Post'

export default async function (req, res) {
  await connectToDb()

  // Create new post
  const handlePOSTMethod = async () => {
    if (!req.body)
      return res
        .status(400)
        .json({ success: false, message: 'No data/body provided.' })

    try {
      const newPost = new Post(req.body)
      const savedPost = await newPost.save()
      return res.status(200).json(savedPost)
    } catch (error) {
      console.log(error)
      return res
        .status(400)
        .json({ success: false, message: 'Could not create post.' })
    }
  }

  switch (req.method) {
    case 'GET':
      return res.status(200).json({ method: 'GET' })
    case 'POST':
      return await handlePOSTMethod()
    default:
  }

  return res.status(200).json({ message: 'Failed to make post.' })
  // Create Post

  // Update Post

  // Delete
}
