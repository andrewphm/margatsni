import { ContactSupportTwoTone } from '@mui/icons-material';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../models/User';

export default async function handler(req, res) {
  const { username } = req.query;

  try {
    await dbConnect();
    let user = await User.findOne({ username });
    let targetUser = await User.findOne({ username: req.body.username });
    let savedUser;
    let savedTargetUser;

    if (user.following.includes(targetUser.username)) {
      const index = user.following.indexOf(targetUser.username);
      user.following.splice(index, 1);
      savedUser = await user.save();

      console.log(user.username, ' unfollowed ', targetUser.username);
    }

    if (targetUser.followers.includes(user.username)) {
      const index = targetUser.followers.indexOf(user.username);
      targetUser.followers.splice(index, 1);
      savedTargetUser = await targetUser.save();

      console.log(
        'Removed ',
        user.username,
        ' from ',
        targetUser.username,
        ' follower list'
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
