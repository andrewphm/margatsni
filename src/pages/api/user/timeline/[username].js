import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';
import Post from '../../../../models/Post';

export default async function handler(req, res) {
  const { username } = req.query;

  try {
    await dbConnect();
    const user = await User.findOne({ username });

    const timeline = await Post.find({
      username: { $in: user.following },
    }).sort({ createdAt: -1 });

    res.status(200).json(timeline);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: false, message: 'Could not fetch timeline.' });
  }
}
