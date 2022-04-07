import dbConnect from 'src/lib/dbConnect';
import User from 'src/models/User';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  try {
    await dbConnect();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Could not connect to DB' });
  }

  const {
    method,
    query: { username },
    body,
  } = req;

  try {
    const user = await User.findOne({ username });
    const success = await bcrypt.compare(body.oldPassword, user.hashedPassword);

    if (!success)
      return res.status(401).json({ message: 'Incorrect password.' });

    const newHashedPassword = await bcrypt.hash(body.newPassword, 10);

    user.hashedPassword = newHashedPassword;

    await user.save();

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
}
