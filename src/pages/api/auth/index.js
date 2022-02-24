import { ResetTv } from '@mui/icons-material'
import connectToDb from '../../../lib/connectToDb'

import User from '../../../models/User'

export default async function handler(req, res) {
  const {
    method,
    body: { username },
  } = req

  connectToDb()

  switch (method) {
    // Sign up user
    case 'PUT':
      try {
        console.log(username)
        console.log(method)
        let newUser = new User({ username })
        let savedUser = await newUser.save()
        return res.status(200).json(savedUser)
      } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, error: error.message })
      }

    // Log in user
    case 'POST':
    default:
      res.status(400).json({ success: false })
  }
}
