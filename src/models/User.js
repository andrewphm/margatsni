import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      maxLength: [20, 'Name cannot be more than 20 characters'],
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required.'],
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
    },
    hashedPassword: {
      type: String,
    },
    image: {
      type: String,
      default:
        'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=1&_nc_ohc=tQXozS3rhfwAX9sNZE_&edm=AEaYFD0BAAAA&ccb=7-4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4&oh=00_AT_CiKO7_2w-q3mLPPRihUg1Op0QcvXGMWv9Wbik7nJiIg&oe=621CD8CF&_nc_sid=751ab8',
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
