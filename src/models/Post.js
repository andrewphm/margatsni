import mongoose from 'mongoose'

const SinglePost = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    caption: String,
  },
  { timestamps: true }
)

const PostSchema = new mongoose.Schema(
  {
    items: [SinglePost],
    username: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
