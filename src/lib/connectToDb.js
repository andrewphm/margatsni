import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

const opts = { bufferCommands: false }

export default async function () {
  // If in production, don't use cache
  if (process.env.NODE_ENV === 'production') {
    mongoose
      .connect(MONGODB_URI, opts)
      .then((conn) => console.log('Connected to DB 🚀🔥'))
      .catch((error) => console.log(error))
  }

  // Try connecting via cached connection
  if (cached.conn) {
    console.log('Connected to DB via cache 🔥🚀')
    return cached.conn
  }

  // Checking cache
  if (!cached.promise) {
    try {
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((conn) => conn)

      console.log('Connected to DB 🚀🔥')
    } catch (error) {
      console.log(error)
    }
  }

  // Set cache connection
  cached.conn = await cached.promise
  return cached.conn
}
