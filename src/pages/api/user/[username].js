import connectToDb from '../../../lib/connectToDb'
import User from '../../../models/User'

const handler = async (req, res) => {
  await connectToDb()

  const {
    method,
    query: { username },
  } = req

  try {
    const user = await User.findOne({ username })

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: 'Could not find user.' })
    }
    return res.status(200).json(user)
  } catch (error) {
    res.status(400).json({
      succes: false,
      message: 'Something went wrong, please try again.',
    })
  }
}

export default handler
