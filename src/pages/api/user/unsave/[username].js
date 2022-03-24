import User from '../../../../models/User';
import dbConnect from '../../../../lib/dbConnect';

export default async function handler(req, res) {
  const { username } = req.query;
  const { postID } = req.body;

  try {
    await dbConnect();
    const user = await User.findOne({ username });
    const index = user.savedPosts.indexOf(postID);
    user.savedPosts.splice(index, 1);
    const savedUser = await user.save();
    return res.status(200).json(savedUser);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ succes: false, message: 'Unable to unsave post.' });
  }
}
