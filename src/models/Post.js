import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    items: [{ image: String, date: Date, caption: String }],
    username: {
      type: String,
      unique,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
