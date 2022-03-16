import Post from '../../models/Post'
import User from '../../models/User'
import Layout from '../../components/layouts/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import nopfp from '../../../public/images/nopfp.jpeg'
import Image from 'next/image'
import { formatDistance } from 'date-fns'
import mongoose from 'mongoose'

const UserPost = ({ userPosts, post, userData }) => {
  // If user post cannot be found
  if (!post) {
    return (
      <Layout>
        <div className="my-10 mx-auto flex flex-col gap-y-5 px-10 text-center">
          <p className="text-2xl font-semibold">
            Sorry, this page isn't available.
          </p>

          <p>
            The link you followed may be broken, or the page may have been
            removed.{' '}
            <Link href="/">
              <a>
                <span className="cursor-pointer text-blue-btn">
                  Click here to go back home.
                </span>
              </a>
            </Link>
          </p>
        </div>
      </Layout>
    )
  }

  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleChange = () => {
    setWindowSize((prev) => window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleChange)

    return () => {
      window.removeEventListener('resize', handleChange)
    }
  }, [])

  const [showMoreCaption, setShowMoreCaption] = useState(false)
  const handleShowMoreCaption = () => {
    setShowMoreCaption((prev) => !prev)
    const caption = document.getElementById('caption')
    caption.classList.add('whitespace-normal')
  }

  const [showComments, setShowComments] = useState(3)

  const handleWriteComment = () => {
    document.getElementById('comment-box').classList.remove('h-0', 'w-0')
  }

  return (
    <Layout>
      {/* Mobile render */}
      {windowSize < 767 && (
        <article className="h-full min-h-[80vh] w-full">
          {/* Header */}
          <div className="flex w-full items-center gap-x-3 p-3 md:hidden">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-neutral-400">
              <Image
                src={userData.image || nopfp}
                objectFit="contain"
                layout="fill"
                className="-z-20"
              />
            </div>

            <Link href={`/${userData.username}`}>
              <a>
                <h1 className="cursor-pointer text-sm font-semibold">
                  {userData.username}
                </h1>
              </a>
            </Link>

            <button className="rounded-md bg-blue-btn px-2 py-1 text-xs font-medium text-white hover:scale-105">
              Follow
            </button>
          </div>
          {/* Image */}
          <div className=" relative flex w-full items-center border border-neutral-200 bg-neutral-400 bg-opacity-20 pt-[100%]">
            <Image
              src={post.image}
              layout="fill"
              className="object-cover"
              objectPosition="center"
            />
          </div>

          {/* Buttons */}
          <div className="my-3 flex items-center justify-between px-4">
            <div className="flex items-center gap-x-[18px]">
              {/* Like */}
              <div className="cursor-pointer hover:scale-[1.05] hover:text-gray-500">
                {true ? (
                  <svg
                    aria-label="Unlike"
                    color="#ed4956"
                    fill="#ed4956"
                    height="24"
                    role="img"
                    viewBox="0 0 48 48"
                    width="24"
                  >
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                ) : (
                  <svg
                    aria-label="Like"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                  </svg>
                )}
              </div>
              {/* Comment */}
              <div
                onClick={handleWriteComment}
                className="cursor-pointer hover:scale-[1.05] hover:text-gray-500"
              >
                <svg
                  aria-label="Comment"
                  color="currentColor"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              {/* Message */}
              <div className="cursor-pointer hover:scale-[1.05] hover:text-gray-500">
                <svg
                  aria-label="Share Post"
                  color="currentColor"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <line
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"
                  ></line>
                  <polygon
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></polygon>
                </svg>
              </div>
            </div>
            {/* Save */}
            <div className="cursor-pointer hover:scale-[1.05] hover:text-gray-500">
              {true ? (
                <svg
                  aria-label="Remove"
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path>
                </svg>
              ) : (
                <svg
                  aria-label="Save"
                  color="currentColor"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></polygon>
                </svg>
              )}
            </div>
          </div>

          {/* Likes */}
          <div className="my-2 px-4">
            <p className="text-[15px]">
              Be the first to{' '}
              <span className="cursor-pointer font-bold">like this</span>
            </p>
          </div>

          {/* Caption */}
          {post.caption && (
            <div className="w-full px-4">
              <p id="caption" className="truncate">
                <span className="font-semibold">{userData.username}</span>{' '}
                {post.caption}
              </p>
              {post.caption.length > 50 && !showMoreCaption && (
                <p
                  onClick={handleShowMoreCaption}
                  className="cursor-pointer font-medium text-neutral-500"
                >
                  more
                </p>
              )}
            </div>
          )}

          {/* Date */}
          <div className="my-3 px-4 text-[13px] text-neutral-500">
            <p>
              {formatDistance(new Date(post.createdAt), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>

          {/* Comments */}
          {post.comments.length > 0 && (
            <div className="flex flex-col px-4 py-1">
              <ul>
                {comments.map(({ username, comment }, i) => {
                  if (i >= showComments) return null

                  return (
                    <li key={i}>
                      <p>
                        <span className="pr-[6px] font-semibold">
                          {' '}
                          {username}
                        </span>
                        {comment}
                      </p>
                    </li>
                  )
                })}
                {showComments <= post.comments.length && (
                  <li>
                    <p
                      onClick={() => setShowComments((prev) => prev + 3)}
                      className="cursor-pointer text-[14px] font-medium text-neutral-500"
                    >
                      Show more comments
                    </p>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Write a comment */}
          <div
            id="comment-box"
            className="mx-4 flex h-0 w-0 items-start overflow-hidden border-t p-3 text-sm"
          >
            <svg
              aria-label="Emoji"
              color="#262626"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path>
            </svg>
            <textarea
              name="comment"
              placeholder="Add a comment..."
              rows={4}
              autoFocus={true}
              className="h-full w-full resize-none bg-transparent px-2 placeholder:text-sm focus:outline-none"
            ></textarea>

            <button
              className="font-semibold text-blue-btn opacity-50"
              disabled={true}
            >
              Post
            </button>
          </div>
        </article>
      )}

      {/* Desktop render */}
      {windowSize > 767 && (
        <article className="mx-auto h-full min-h-[80vh] w-full max-w-4xl">
          <p>hi</p>
        </article>
      )}
    </Layout>
  )
}

export default UserPost

export const getServerSideProps = async (context) => {
  if (mongoose.connection.readyState !== 1) {
    console.log('Connecting to db')
    const db = await mongoose
      .connect(process.env.MONGODB_URI, {
        bufferCommands: false,
      })
      .then(() => console.log('Connected to db!'))
  }

  let userQuery = context.query.username
  let userPosts = await Post.findOne({ username: userQuery })
  // Serialize results
  userPosts = JSON.parse(JSON.stringify(userPosts))
  let userData = await User.findOne({ username: userQuery })

  let postID = context.query.postID
  let post = userPosts.items.filter((item) => {
    return item._id === postID
  })[0]

  return {
    props: {
      userPosts,
      post: post || null,
      userData: {
        username: userData.username,
        image: userData.image,
      },
    },
  }
}
