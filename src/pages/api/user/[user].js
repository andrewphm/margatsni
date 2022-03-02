import connectToDb from '../../../lib/connectToDb'
import User from '../../../models/User'

const handler = async (req, res) => {
  await connectToDb

  const userQuery = req.query.user
  let user

  try {
    user = await User.findOne({ username: userQuery })
    res.status(200).json({ user })

    if (!user) {
      res.status(400).json({ succes: false, message: 'Could not find user' })
    }
  } catch (error) {
    res.status(400).json({
      succes: false,
      message: 'Something went wrong, please try again.',
    })
  }
}

export default handler
