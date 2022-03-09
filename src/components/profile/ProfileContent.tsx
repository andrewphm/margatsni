import { useState, useRef } from 'react'

const ProfileContent = ({}) => {
  const [tab, setTab] = useState('posts')
  const tabRef = useRef(null)

  const handleTabChange = (e) => {
    if (tabRef.current === e.currentTarget) return
    tabRef?.current.classList.remove('border-t-black', 'border-t', 'text-black')
    e.currentTarget.classList.add('border-t-black', 'border-t', 'text-black')
    tabRef.current = e.currentTarget
    setTab((prev) => tabRef.current.id)
  }

  return (
    <div className="mx-auto flex w-full flex-col border-t border-neutral-300  md:max-w-4xl">
      {/* Tab */}
      <div className="mx-auto flex w-full justify-center gap-x-10 text-gray-500">
        <div
          id="posts"
          onClick={handleTabChange}
          ref={tabRef}
          className="flex cursor-pointer items-center gap-x-1 border-t border-t-black  pt-4 text-xs font-semibold text-black"
        >
          <svg
            aria-label=""
            color="currentColor"
            fill="currentColor"
            height="14"
            role="img"
            viewBox="0 0 24 24"
            width="14"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>

          <p className="tracking-wide">POSTS</p>
        </div>
        <div
          id="tagged"
          onClick={handleTabChange}
          className="flex cursor-pointer items-center gap-x-1 pt-4 text-xs font-semibold"
        >
          <svg
            aria-label=""
            color="currentColor"
            fill="currentColor"
            height="14"
            role="img"
            viewBox="0 0 24 24"
            width="14"
          >
            <path
              d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </svg>
          <p className="tracking-wide">TAGGED</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileContent
