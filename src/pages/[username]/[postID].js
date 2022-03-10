import connectToDb from '../../lib/connectToDb'
import Post from '../../models/Post'
import User from '../../models/User'
import Layout from '../../components/layouts/Layout'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import nopfp from '../../../public/images/nopfp.jpeg'
import Image from 'next/image'

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

  console.log(userData)

  return (
    <Layout>
      <article className="h-full w-full">
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

        <div className=" relative flex w-full items-center border border-neutral-200 bg-neutral-400 bg-opacity-20 pt-[100%]">
          <Image
            src={post.image}
            layout="fill"
            className="object-cover"
            objectPosition="center"
          />
        </div>
      </article>
    </Layout>
  )
}

export default UserPost

export async function getServerSideProps(context) {
  await connectToDb()

  let userQuery = context.query.username
  let userPosts = await Post.findOne({ username: userQuery })
  // Serialize results
  userPosts = JSON.parse(JSON.stringify(userPosts))
  let userData = await User.findOne({ username: userQuery })

  let postID = context.query.postID
  let post = userPosts.items.filter((item) => {
    return item._id === postID
  })[0]

  console.log(post)

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
