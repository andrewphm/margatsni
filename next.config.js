/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      'mongodb+srv://admin:admin@cluster0.61vc6.mongodb.net/mainDB?retryWrites=true&w=majority',
    JWT_SEC: '12345',
    images: {
      domains: [
        'scontent-sjc3-1.cdninstagram.com',
        'scontent-sjc3-1.cdninstagram.com',
      ],
    },
  },
}
