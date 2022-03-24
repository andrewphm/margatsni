import { useState } from 'react';
import { useSelector } from 'react-redux';
import API from '../apiCalls';
import { useDispatch } from 'react-redux';
import { updateCurrentUser } from '../redux/userRedux';
import { useRouter } from 'next/router';

export default function useFollowUser(userData) {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(
    user?.following.includes(userData.username)
  );
  const router = useRouter();

  const [followers, setFollowers] = useState(userData.followers.length);

  const handleFollowClick = async () => {
    if (!user) {
      router.push('/login');
    }

    try {
      setIsLoading((pre) => true);
      const res = await API.followUser(user.username, {
        username: userData.username,
      });

      if (res.status === 200) {
        setFollowers(res.data.targetUser.followers.length);
        dispatch(updateCurrentUser(res.data.savedUser));
        setIsFollowing((prev) => true);
        setIsLoading((prev) => false);
      }
    } catch (error) {
      setIsLoading((prev) => false);
      console.log(error);
    }
  };

  const handleUnfollowClick = () => {};

  return {
    isFollowing,
    handleFollowClick,
    handleUnfollowClick,
    isLoading,
    followers,
  };
}
