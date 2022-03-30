import { updateCurrentUser } from 'src/redux/userRedux.js';
import connectToDb from '../../../lib/dbConnect.js';
import User from '../../../models/User';

export default async function handler(req, res) {
  const {
    method,
    query: { username },
  } = req;
  await connectToDb();

  const fetchUser = async () => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: 'Could not find user.' });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({
        succes: false,
        message: 'Something went wrong, please try again.',
      });
    }
  };

  const updateUser = async () => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.body._id,
        {
          $set: req.body,
        },
        { new: true }
      );

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: 'Could not update user', success: false });
    }
  };

  switch (method) {
    case 'GET':
      return await fetchUser();
    case 'POST':
      return await updateUser();
    default:
      return res.status(400).json({ success: false });
  }
}
