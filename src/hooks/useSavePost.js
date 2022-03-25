import { useState } from 'react';
import { useSelector } from 'react-redux';
import API from '../apiCalls';
import { updateCurrentUser } from '../redux/userRedux';
import { useDispatch } from 'react-redux';

function useSavePost(post) {
  const user = useSelector((state) => state.user.currentUser);
  const [isSaved, setIsSaved] = useState(user?.savedPosts.includes(post._id));
  const dispatch = useDispatch();

  const handleSavePostClick = async () => {
    try {
      let res = await API.savePost(user?.username, { postID: post._id });
      if (res.status === 200) {
        dispatch(updateCurrentUser(res.data));
        setIsSaved((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnsavePostClick = async () => {
    try {
      let res = await API.unsavePost(user?.username, { postID: post._id });
      if (res.status === 200) {
        dispatch(updateCurrentUser(res.data));
        setIsSaved((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { isSaved, handleSavePostClick, handleUnsavePostClick };
}

export default useSavePost;
