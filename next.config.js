/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      'mongodb://admin:admin@cluster0-shard-00-00.61vc6.mongodb.net:27017,cluster0-shard-00-01.61vc6.mongodb.net:27017,cluster0-shard-00-02.61vc6.mongodb.net:27017/mainDB?ssl=true&replicaSet=atlas-4u5tz7-shard-0&authSource=admin&retryWrites=true&w=majority',
    JWT_SEC: '12345',
    FIREBASE_SEC: 'Cfd17sgJVzeJJ_KNXq62xII1vSkiRs',
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}
