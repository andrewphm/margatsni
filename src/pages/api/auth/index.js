import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import connectToDb from '../../../lib/connectToDb'
import User from '../../../models/User'
import formatValidationErr from '../../../helpers/formatValidationErr'
import cookie from 'cookie'

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

        // Create JWT accessToken
        const accessToken = jwt.sign(
          {
            id: savedUser._id,
            isAdmin: savedUser.isAdmin,
          },
          process.env.JWT_SEC,
          {
            expiresIn: '10d',
          }
        )

        // Set HttpOnly cookie
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            path: '/',
          })
        )

        return res.status(200).json({ ...savedUser, accessToken })
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
      try {
        let { username, password } = body

        // Find User and validate
        let user = await User.findOne({ username })
        if (!user)
          return res.status(403).json({
            success: false,
            error: 'This username does not exist.',
          })

        // Validate password
        let success = await bcrypt.compare(password, user.hashedPassword)
        if (!success)
          return res.status(403).json({
            success: false,
            error: 'Incorrect password, please try again.',
          })

        // Create JWT accessToken
        const accessToken = await jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          {
            expiresIn: '10d',
          }
        )

        // Set HttpOnly cookie
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            path: '/',
          })
        )

        // Return custom user object
        let { hashedPassword, ...others } = user._doc

        return res.status(200).json({ ...others, accessToken })
      } catch (error) {
        return res
          .status(400)
          .json({ success: false, message: 'Something went wrong.' })
      }
    default:
      return res.status(400).json({ success: false })
  }
}
