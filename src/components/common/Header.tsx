import {
  AddBox,
  AddBoxOutlined,
  Explore,
  ExploreOutlined,
  Favorite,
  FavoriteBorder,
  Home,
  HomeOutlined,
  Send,
  SendOutlined,
} from '@mui/icons-material'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <nav>
      <div>header</div>
      <Home />
      <HomeOutlined />
      <Send />
      <SendOutlined />
      <AddBox />
      <AddBoxOutlined />
      <Explore />
      <ExploreOutlined />
      <Favorite />
      <FavoriteBorder />
    </nav>
  )
}

export default Header
