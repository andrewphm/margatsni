import noposts from '../../../public/images/profile/noposts.jpg';
import Image from 'next/image';
import NewPost from '../newpost/NewPost';
import { useState } from 'react';

export default function NoPost() {
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <>
      {showNewPost && <NewPost setShowNewPost={setShowNewPost} />}

      <div className="flex w-full bg-white md:flex-row flex-col">
        <div className="relative min-w-[380px] min-h-[380px] order-last md:order-1">
          <Image
            alt=""
            layout="fill"
            objectFit="contain"
            src={noposts}
            priority={true}
          />
        </div>

        <div className="flex flex-col w-full items-center justify-center text-center order-1 md:order-1 py-8">
          <p className="font-semibold text-base xs:text-lg">
            Start capturing and sharing your moments.
          </p>
          <p className="text-sm xs:text-base">Add a post to get started.</p>

          <div className="flex w-full pt-4 justify-center gap-x-5">
            <svg
              onClick={() => setShowNewPost((prev) => !prev)}
              className="cursor-pointer"
              aria-label="New Post"
              color="#262626"
              fill="#262626"
              height="72"
              role="img"
              viewBox="0 0 24 24"
              width="72"
            >
              <path
                d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="6.545"
                x2="17.455"
                y1="12.001"
                y2="12.001"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="12.003"
                x2="12.003"
                y1="6.545"
                y2="17.455"
              ></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
