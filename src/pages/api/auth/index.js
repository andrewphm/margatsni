import { red } from '@mui/material/colors'
import bcrypt from 'bcrypt'
import connectToDb from '../../../lib/connectToDb'
import User from '../../../models/User'
import formatValidationErr from '../../../helpers/formatValidationErr'

export default async function handler(req, res) {
  const { method, body } = req

  connectToDb()

  switch (method) {
    // Sign up user
    case 'PUT':
      try {
        const { fullName, username, password, email } = body

        let hashedPassword

        if (password) {
          hashedPassword = await bcrypt.hash(password, 10)
        }

        let newUser = new User({ username, fullName, hashedPassword, email })

        let savedUser = await newUser.save()

        return res.status(200).json(savedUser)
      } catch (error) {
        let { code } = error

        return res.status(400).json({
          success: false,
          errorCode: code || null,
          validationErrors: formatValidationErr(error.message),
        })
      }

    // Log in user
    case 'POST':
    default:
      res.status(400).json({ success: false })
  }
}
