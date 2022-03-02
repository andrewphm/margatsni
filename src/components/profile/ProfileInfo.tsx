import { useSelector } from 'react-redux'

const ProfileInfo = () => {
  const user = useSelector((state) => state.user.currentUser)

  return <div>ProfileInfo</div>
}

export default ProfileInfo
