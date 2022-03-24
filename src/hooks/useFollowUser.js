import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function useFollowUser(userData) {
  const user = useSelector((state) => state.user.currentUser);
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(
    user.following.includes(userData.username)
  );

  const handleFollowClick = () => {};

  const handleUnfollowClick = () => {};

  return { isFollowing, handleFollowClick, handleUnfollowClick, isLoading };
}
