import { useState } from 'react';
import { useSelector } from 'react-redux';
import API from '../apiCalls';

function useSavedPost(post) {
  const user = useSelector((state) => state.user.currentUser);
  const [isSaved, setIsSaved] = useState(user.savedPosts.includes(post._id));

  const handleSavePostClick = async () => {
    try {
      let res = await API.savePost(user.username, post._id);
      if (res.status === 200) {
        setIsSaved((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnsavePostClick = async () => {
    try {
      let res = await API.unsavePost(user.username, post._id);
      if (res.status === 200) {
        setIssSaved((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { isSaved, handleSavePostClick, handleUnsavePostClick };
}

export default useSavedPost;
