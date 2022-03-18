import { useState } from 'react'
import API from '../API'
import { useSelector } from 'react-redux'

const useLikePost = (post) => {
  const user = useSelector((state) => state.user.currentUser)
  const [likes, setLikes] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(likes.includes(user.username))

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev)
    if (isLiked) {
      //
      const { data } = await API.likePost(post._id)
      setLikes((prev) => data)
    } else {
      const { data } = await API.unlikePost(post._id)
      setLikes((prev) => data)
    }
  }

  return { isLiked, likes, handleLikeClick }
}

export default useLikePost
