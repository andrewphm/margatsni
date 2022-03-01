import {
  AccountCircle,
  AddBox,
  AddBoxOutlined,
  BookmarkBorder,
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
  SettingsOutlined,
} from '@mui/icons-material'
import { useRef, useState } from 'react'
import logo from '../../../public/images/logo.png'
import nopfp from '../../../public/images/nopfp.jpeg'
import { useSelector } from 'react-redux'
import Image from 'next/image'

const Header = () => {
  const user = useSelector((state) => state.user.currentUser)
  const [tab, setTab] = useState('home')
  const [inputIsActive, setInputIsActive] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const menuRef = useRef(null)

  const handleProfileClick = () => {
    setTab((prev) => 'user')

    menuRef.current.classList.toggle('opacity-0')
    menuRef.current.classList.toggle('transform-none')
  }

  const handleSearchClose = () => {
    setSearchInput((prev) => '')
    setInputIsActive((prev) => !prev)
  }

  return (
    <>
      <header className="sticky top-0 flex h-[60px] w-screen items-center justify-center border bg-white px-5">
        <div className="flex w-full max-w-6xl items-center justify-between gap-x-2">
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
          <div className="relative flex items-center gap-x-4">
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
              onClickCapture={handleProfileClick}
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

            <div
              ref={menuRef}
              className="absolute top-12 -right-2 z-10 flex w-56 -translate-y-96  rounded-md bg-white opacity-0 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.0975)] transition-opacity duration-500 ease-linear"
            >
              <ul className="h-full w-full text-sm">
                <li className="flex cursor-pointer items-center gap-x-2 rounded-t-md py-[10px] px-4 hover:bg-gray-100">
                  <AccountCircle fontSize="small" />
                  <p>Profile</p>
                </li>
                <li className="flex cursor-pointer items-center gap-x-2 py-[10px] px-4 hover:bg-gray-100">
                  <BookmarkBorder fontSize="small" />
                  <p>Saved</p>
                </li>
                <li className="flex cursor-pointer items-center gap-x-2 py-[10px] px-4 hover:bg-gray-100">
                  <SettingsOutlined fontSize="small" />
                  <p>Settings</p>
                </li>
                <li className="flex cursor-pointer items-center gap-x-2 rounded-b-md border-t py-[10px] px-5 hover:bg-gray-100">
                  <p>Sign Out</p>
                </li>
              </ul>

              <div className="absolute right-[17px] -top-[9px] -z-10 h-4 w-4 rotate-45 border-l border-t bg-white"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
