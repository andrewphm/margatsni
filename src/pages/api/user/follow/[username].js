import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';

export default async function handler(req, res) {
  const { username } = req.query;

  try {
    await dbConnect();
    const targetUser = await User.findOne({ username: req.body.username });
    const user = await User.findOne({ username });
    let savedUser;
    let savedTargetUser;

    if (!user.following.includes(targetUser.username)) {
      user.following.push(targetUser.username);
      savedUser = await user.save();

      console.log(user.username, ' following ', targetUser.username);
    }

    if (!targetUser.followers.includes(user.username)) {
      targetUser.followers.push(user.username);
      savedTargetUser = await targetUser.save();

      console.log(
        'Add ',
        user.username,
        ' to follower list of '.targetUser.username
      );
    }

    return res.status(200).json(savedUser);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ success: false, message: 'Could not follow user.' });
  }
}
