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
import { useState } from 'react'
import logo from '../../../public/images/logo.png'
import nopfp from '../../../public/images/nopfp.jpeg'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const Header = () => {
  const user = useSelector((state) => state.user.currentUser)
  const [tab, setTab] = useState('home')
  console.log(user)

  return (
    <>
      <header className="flex h-[60px] w-screen items-center justify-center border">
        <div className="flex max-w-4xl items-center">
          {/* Logo */}
          <div className="relative h-auto w-32">
            <Image src={logo} objectFit="contain" />
          </div>

          {/* Search Bar */}
          <div>Search</div>

          {/* Nav */}
          <div className="flex items-center gap-x-4">
            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'home')}
            >
              {tab === 'home' ? (
                <Home sx={{ fontSize: 28 }} />
              ) : (
                <HomeOutlined sx={{ fontSize: 28 }} />
              )}
            </div>

            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'send')}
            >
              {tab === 'send' ? (
                <Send sx={{ fontSize: 28 }} />
              ) : (
                <SendOutlined sx={{ fontSize: 28 }} />
              )}
            </div>

            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'add')}
            >
              {tab === 'add' ? (
                <AddBox sx={{ fontSize: 28 }} />
              ) : (
                <AddBoxOutlined sx={{ fontSize: 28 }} />
              )}
            </div>

            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'explore')}
            >
              {tab === 'explore' ? (
                <Explore sx={{ fontSize: 30 }} />
              ) : (
                <ExploreOutlined sx={{ fontSize: 30 }} />
              )}
            </div>

            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'favorite')}
            >
              {tab === 'favorite' ? (
                <Favorite sx={{ fontSize: 28 }} />
              ) : (
                <FavoriteBorder sx={{ fontSize: 28 }} />
              )}
            </div>

            <div
              onClick={() => setTab((prev) => 'user')}
              className={`flex cursor-pointer items-center justify-center rounded-full ${
                tab === 'user' ? 'border border-black p-[1px]' : ''
              }`}
            >
              <Image
                src={nopfp}
                height="30"
                width="30"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
