import { isJSDocCommentContainingNode } from 'typescript'
import connectToDb from '../../../lib/connectToDb'
import Post from '../../../models/Post'

export default async function (req, res) {
  await connectToDb()

  const userQuery = req.query.user

  let userPosts = await Post.findOne({ username: userQuery })

  // If there is no document for the user, create one.
  if (!userPosts) {
    let newUserPost = new Post({ username: userQuery })

    userPosts = await newUserPost.save()
  }

  // Create new post
  const handlePOSTMethod = async () => {
    if (!req.body)
      return res
        .status(400)
        .json({ success: false, message: 'No data/body provided.' })

    userPosts.items.push(req.body)

    try {
      let saved = await userPosts.save()
      return res.status(200).json(saved)
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
      return handlePOSTMethod()
    default:
  }

  return res.status(200).json({ message: 'Did not make a new user' })
  // Create Post

  // Update Post

  // Delete
}
