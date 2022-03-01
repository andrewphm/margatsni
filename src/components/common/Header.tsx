import {
  AddBox,
  AddBoxOutlined,
  Cancel,
  Explore,
  ExploreOutlined,
  Favorite,
  FavoriteBorder,
  Home,
  HomeOutlined,
  Search,
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
  const [inputIsActive, setInputIsActive] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const handleSearchClose = () => {
    setSearchInput((prev) => '')
    setInputIsActive((prev) => !prev)
  }

  return (
    <>
      <header className="flex h-[60px] w-screen items-center justify-center border bg-white">
        <div className="flex w-full max-w-4xl items-center justify-between">
          {/* Logo */}
          <div className="relative flex h-[35px] w-[113px] min-w-[113px] cursor-pointer">
            <Image src={logo} layout="fill" />
          </div>

          {/* Search Bar */}
          <div
            onClick={() => setInputIsActive(true)}
            className="min-w-[150px] max-w-[270px] flex-grow"
          >
            <div className="flex flex-nowrap items-center rounded-lg bg-[#EFEFEF] py-1 px-2 pl-4 text-gray-500">
              {!inputIsActive && (
                <div className="pl-3 pr-2">
                  <Search />
                </div>
              )}
              <input
                className="w-full bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput((prev) => e.target.value)}
              />

              {inputIsActive && (
                <div
                  className="flex items-center"
                  onClickCapture={handleSearchClose}
                >
                  <Cancel className="cursor-pointer" fontSize="small" />
                </div>
              )}
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-x-4">
            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'home')}
            >
              {tab === 'home' ? (
                <Home sx={{ fontSize: 32 }} />
              ) : (
                <HomeOutlined sx={{ fontSize: 32 }} />
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
                <AddBox sx={{ fontSize: 27 }} />
              ) : (
                <AddBoxOutlined sx={{ fontSize: 27 }} />
              )}
            </div>

            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'explore')}
            >
              {tab === 'explore' ? (
                <Explore sx={{ fontSize: 28 }} />
              ) : (
                <ExploreOutlined sx={{ fontSize: 28 }} />
              )}
            </div>

            <div
              className="cursor-pointer "
              onClick={() => setTab((prev) => 'favorite')}
            >
              {tab === 'favorite' ? (
                <Favorite sx={{ fontSize: 27 }} />
              ) : (
                <FavoriteBorder sx={{ fontSize: 27 }} />
              )}
            </div>

            <div
              onClick={() => setTab((prev) => 'user')}
              className={`flex cursor-pointer items-center justify-center rounded-full ${
                tab === 'user' ? 'border border-black p-[1px]' : ''
              }`}
            >
              <div className="relative h-[30px] w-[30px]">
                <Image
                  src={user?.image ? user.image : nopfp}
                  className="rounded-full"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
