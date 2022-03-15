import mongoose from 'mongoose'
import { env } from 'process'

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
  if (process.env.NODE_ENV === 'production') {
    const db = await mongoose.connect(MONGODB_URI, opts)
    return db
  }

  console.log(cached.conn)
  if (cached.conn) {
    return console.log('Already connected to DB 🔥🚀')
  }

  try {
    const db = await mongoose.connect(MONGODB_URI, opts)
    console.log('New connect to DB')
    cached.conn = db.connections[0].readyState
  } catch (error) {
    console.log(error)
  }

  // // Try connecting via cached connection
  // if (cached.conn) {
  //   console.log('Connected to DB via cache 🔥🚀')
  //   return cached.conn
  // }

  // // If in production, don't use cache
  // if (process.env.NODE_ENV === 'development') {
  //   return mongoose
  //     .connect(MONGODB_URI, opts)
  //     .then((conn) => console.log('Connected to DB in dev mode 🚀🔥'))
  //     .catch((error) => console.log(error))
  // }

  // // Checking cache
  // if (!cached.promise) {
  //   try {
  //     cached.promise = mongoose.connect(MONGODB_URI, opts).then((conn) => conn)

  //     console.log('Connected to DB 🚀🔥 and cached connection')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // // Set cache connection
  // cached.conn = await cached.promise
  // return cached.conn
}
