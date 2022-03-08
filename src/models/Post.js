import mongoose from 'mongoose'

const PostCommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const SinglePostSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [PostCommentSchema],
    caption: String,
  },
  { timestamps: true }
)

const PostSchema = new mongoose.Schema(
  {
    items: [SinglePostSchema],
    username: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
