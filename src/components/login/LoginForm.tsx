import { useState } from 'react'
import logo from '../../../public/images/logo.png'
import googleBadge from '../../../public/images/login/googleplaybadge.png'
import appleBadge from '../../../public/images/login/applestorebadge.png'

import Image from 'next/image'
import { Facebook } from '@mui/icons-material'

const initialForm = {
  username: '',
  password: '',
}

const LoginForm = () => {
  const [form, setForm] = useState(initialForm)
  const [isVisible, setIsVisible] = useState(false)

  const handleFormChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleVisibility = (e) => {
    e.preventDefault()
    setIsVisible((prev) => !prev)
  }

  return (
    <div className="flex w-[350px] flex-col gap-y-3">
      <div className="flex w-full flex-col items-center p-6 xs:border xs:bg-white">
        <div className="relative mb-2 h-[20px] w-40 p-10">
          <Image src={logo} layout="fill" objectFit="contain" />
        </div>

        <form className="flex w-full flex-col items-center gap-y-2">
          <div
            className={`relative w-full rounded-sm border bg-white xs:bg-[#fafafa] ${
              form.username ? 'pt-[9px] pb-[1px]' : 'py-[5px]'
            }`}
          >
            <input
              className="w-full bg-transparent px-2 text-sm font-light focus:outline-none"
              id="username"
              name="username"
              type="text"
              onChange={handleFormChange}
              value={form.username}
            />
            <label
              htmlFor="username"
              className={
                form.username
                  ? 'absolute top-[1px] left-2 text-[10px] font-normal text-gray-400 transition-all'
                  : 'absolute top-[6px] left-2 text-sm font-normal text-gray-400 transition-all'
              }
            >
              Username
            </label>
          </div>

          <div
            className={`relative flex w-full rounded-sm border bg-white xs:bg-[#fafafa] ${
              form.password ? 'pt-[9px] pb-[1px]' : 'py-[5px]'
            }`}
          >
            <input
              className="w-full bg-transparent px-2 text-sm font-light focus:outline-none"
              id="password"
              name="password"
              type={isVisible ? 'text' : 'password'}
              onChange={handleFormChange}
              value={form.password}
            />

            {form.password && (
              <p
                onClick={handleVisibility}
                className="relative bottom-1 cursor-pointer pr-3 text-sm"
              >
                Show
              </p>
            )}

            <label
              htmlFor="Password"
              className={
                form.password
                  ? 'absolute top-[1px] left-2 text-[10px] font-normal text-gray-400 transition-all'
                  : 'absolute top-[6px] left-2 text-sm font-normal text-gray-400 transition-all'
              }
            >
              Password
            </label>
          </div>

          <button
            className={`mt-3 w-full rounded-md bg-[#0095f6] py-[2px] font-medium text-white shadow-sm ease-out hover:scale-[1.01] ${
              form.username && form.password
                ? 'hover:shadow-md'
                : 'cursor-not-allowed opacity-50'
            }`}
            disabled={form.username && form.password ? false : true}
          >
            Log In
          </button>

          <button className="w-full rounded-md border bg-white py-[2px] font-medium text-gray-500 ease-out hover:scale-[1.01] hover:bg-neutral-50 hover:shadow-sm">
            <span className="bg-[linear-gradient(90deg,_#6F019C_0%,_#C6017E_135.12%)_!important] bg-clip-text text-transparent xl:text-2xl">
              Demo Log In
            </span>
          </button>
        </form>

        <div className="my-5 flex w-full items-center gap-x-5">
          <div className="h-[1px] w-[45%] border-b"></div>
          <p className="text-sm font-semibold text-gray-400">OR</p>
          <div className="h-[1px] w-[45%] border-b"></div>
        </div>

        <div className="text-center">
          <div className="flex cursor-pointer items-center gap-x-1 text-[14px] text-[#4267B2]">
            <Facebook />
            <p className="font-semibold">Log in with Facebook</p>
          </div>

          <p className="mt-2 cursor-pointer text-sm text-[#4267B2] hover:underline">
            Forgot password?
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center p-6 xs:border xs:bg-white">
        <p className="text-sm">
          Don't have an account?{' '}
          <span className="cursor-pointer font-semibold text-[#0095f6] hover:underline">
            Sign Up
          </span>
        </p>
      </div>

      <div className="mt-2 flex w-full flex-col items-center gap-y-3">
        <p className="text-sm">Get the app.</p>

        <div className="flex h-10 justify-center gap-x-4">
          <div className="relative w-[40%] cursor-pointer">
            <Image src={appleBadge} className="h-auto w-1/2" alt="" />
          </div>

          <div className="relative w-[40%] cursor-pointer">
            <Image src={googleBadge} className="h-auto w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
