import mongoose from 'mongoose'

const PostCommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      default: '',
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    caption: String,
    comments: [PostCommentSchema],
  },
  { timestamps: true }
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
