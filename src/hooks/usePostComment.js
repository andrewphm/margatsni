import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useState } from 'react'

const usePostComment = (setComments) => {
  const user = useSelector((state) => state.user.currentUser)
  const [isLoading, setIsLoading] = useState(false)
  const [comment, setComment] = useState('')
  const router = useRouter()

  const handleCommentClick = async (e) => {
    e.preventDefault()

    if (!user) {
      return router.push('/login')
    }

    let userComment = {
      username: user.username,
      image: user.image,
      comment,
    }

    setIsLoading((prev) => !prev)
    // Call api route

    setComments((prev) => {
      return [userComment, ...prev]
    })

    setComment((prev) => '')
    setIsLoading((prev) => !prev)
  }

  return { comment, setComment, isLoading, setIsLoading, handleCommentClick }
}

export default usePostComment
