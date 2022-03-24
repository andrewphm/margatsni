import Image from 'next/image';
import nopfp from '../../../public/images/nopfp.jpeg';
import useFollowUser from '../../hooks/useFollowUser';

const ProfileInfo = ({ userData, userPosts }) => {
  const {
    isFollowing,
    isLoading,
    handleFollowClick,
    handleUnfollowClick,
    followers,
  } = useFollowUser(userData);

  return (
    <div className="mx-auto flex w-full flex-col md:max-w-4xl">
      <div className="flex w-full items-center gap-x-5 p-4 sm:py-5 sm:px-8 md:items-start lg1:py-8">
        <div className="relative max-h-[86px] min-h-[86px] min-w-[86px] max-w-[86px] md:mx-8 md:min-h-[150px] md:min-w-[150px] xl:mx-14">
          <Image
            src={userData.image || nopfp}
            layout="fill"
            className="rounded-full border"
            objectFit="contain"
            alt="User image"
            priority={true}
          />
        </div>

        <div className="hidden w-full flex-col gap-y-4 overflow-hidden pl-4 md:flex xl:gap-y-6">
          <div className="mt-2 flex gap-x-4">
            <p className="truncate text-3xl font-light">{userData.username}</p>

            {isFollowing ? (
              <div className="flex items-center gap-x-4">
                <button className="text-sm font-semibold border px-3 rounded-md h-5/6 border-neutral-300">
                  Message
                </button>
                <button className="text-sm font-semibold flex border px-3 rounded-md h-5/6 items-center border-neutral-300">
                  <svg
                    className="w-4 text-black-light"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="w-3.5 text-green-600 -ml-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeLidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={handleFollowClick}
                className={`rounded-md bg-blue-btn py-1 px-3 text-sm font-medium text-white min-w-[100px] ${
                  isLoading && 'opacity-40'
                }`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin mx-auto h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  'Follow'
                )}
              </button>
            )}
          </div>

          <div className="flex gap-x-4 lg:gap-x-8">
            <p>
              <span className="font-semibold">{userPosts.length}</span> posts
            </p>
            <p>
              <span className="font-semibold">{followers}</span> followers
            </p>
            <p>
              <span className="font-semibold">{userData.following.length}</span>{' '}
              following
            </p>
          </div>

          <div className="flex flex-col">
            <p className="font-semibold">{userData.fullName}</p>
            <p className="max-w-[475px]">
              This is placeholder, add feature to change later!
            </p>
          </div>
        </div>

        <div className=" flex w-full flex-col gap-y-1 overflow-hidden md:hidden">
          <p className=" w-full truncate text-2xl">{userData.username}</p>

          {isFollowing ? (
            <div className="flex items-center gap-x-4 h-8">
              <button className="text-sm font-semibold border px-3 rounded-md h-5/6 border-neutral-300">
                Message
              </button>
              <button className="text-sm font-semibold flex border px-3 rounded-md h-5/6 items-center border-neutral-300">
                <svg
                  className="w-4 text-black-light"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="w-3.5 text-green-600 -ml-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeLidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            <button
              disabled={isLoading}
              className={`w-full max-w-[225px] rounded-md bg-blue-btn py-1 px-2 text-sm font-medium text-white ${
                isLoading && 'opacity-40'
              }`}
            >
              {isLoading ? (
                <svg
                  className="animate-spin mx-auto h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                'Follow'
              )}
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col px-4 pb-4 sm:px-8 sm:pb-5 md:hidden">
        <h2 className="font-medium">{userData.fullName}</h2>
        <p className="max-w-[400px] text-sm">
          This is placeholder, add feature to change later!
        </p>
      </div>

      <div className="w-full border-y border-y-neutral-300 md:hidden">
        <div className="mx-auto flex w-full max-w-[450px] justify-between px-8 py-2">
          <div className="text-center">
            <p className="text-sm font-medium">{userPosts.length}</p>
            <p className="text-sm text-neutral-500">posts</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">{followers}</p>
            <p className="text-sm text-neutral-500">followers</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">{userData.following.length}</p>
            <p className="text-sm text-neutral-500">following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
