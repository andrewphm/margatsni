import Image from 'next/image';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import nopfp from '../../../public/images/nopfp.jpeg';
import imageUpload from 'src/helpers/imageUpload';
import { updateCurrentUser } from 'src/redux/userRedux';
import { useDispatch } from 'react-redux';
import apiCalls from 'src/apiCalls';

const ProfileSettings = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    bio: user.bio,
    fullName: user.fullName,
  });

  const [isPhotoUploading, setIsPhotoUploading] = useState(false);
  const handleProfilePhotoChange = async (e) => {
    setIsPhotoUploading((prev) => !prev);
    try {
      const imgURL = await imageUpload(e.target.files[0]);

      const { data: updatedUser } = await apiCalls.updateUser({
        ...user,
        image: imgURL,
      });

      console.log(updatedUser);
      dispatch(updateCurrentUser(updatedUser));

      setIsPhotoUploading((prev) => !prev);
    } catch (error) {
      console.log(error);
      setIsPhotoUploading((prev) => !prev);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitClick = async () => {
    try {
      setIsLoading((prev) => !prev);

      const { data: updatedUser } = await apiCalls.updateUser({
        ...user,
        ...form,
      });
      dispatch(updateCurrentUser(updatedUser));

      setIsLoading((prev) => !prev);
    } catch (error) {
      console.log(error);
      setIsLoading((prev) => !prev);
    }
  };

  return (
    <div className="w-full min-h-[70vh]">
      <div className="flex py-8 md:px-20 flex-col gap-y-6 px-3">
        <div className="flex items-center gap-x-6">
          <div className="md:min-w-[125px] flex justify-end">
            <div className="relative min-w-[64px] min-h-[64px] rounded-full border">
              <Image
                src={user?.image || nopfp}
                layout="fill"
                alt="Profile photo"
                objectFit="cover"
                className="rounded-full"
              />
              {isPhotoUploading && (
                <div className="absolute w-full h-full flex items-center ">
                  <svg
                    className="animate-spin mx-auto h-12 w-12 text-black"
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
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold leading-5 text-lg">{user?.username}</p>

            <label
              className="text-sm cursor-pointer text-blue-btn font-semibold"
              htmlFor="profile-photo"
            >
              Change Profile Photo
              <input
                id="profile-photo"
                type="file"
                name="profile-photo"
                className="hidden"
                accept="image/*"
                onChange={handleProfilePhotoChange}
              />
            </label>
          </div>
        </div>

        <div className="flex items-start gap-x-6 w-full md:flex-row flex-col gap-y-2">
          <div className="md:min-w-[125px] text-right font-semibold text-base">
            <p>Name</p>
          </div>
          <div className="flex-grow w-full">
            <input
              type="text"
              className="w-full focus:outline-none border border-neutral-200 rounded-sm px-3 py-1"
              value={form.fullName}
              name="fullName"
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />

            <p className="text-neutral-500 text-xs mt-2 w-11/12">
              Help people discover your account by using the name you&apos;re
              known by: either your full name, nickname, or business name.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-6 w-full md:flex-row flex-col gap-y-2">
          <div className="md:min-w-[125px] text-right font-semibold text-base">
            <p>Username</p>
          </div>
          <div className="flex-grow w-full">
            <input
              type="text"
              className="w-full focus:outline-none border border-neutral-200 rounded-sm px-3 py-1 cursor-not-allowed"
              name="username"
              value={user.username}
              disabled={true}
            />

            <p className="text-neutral-500 text-xs mt-2 w-11/12">
              Your username helps people discover you and is used to access
              Margatsni.{' '}
              <span className="text-blue-btn">
                At this time you cannot change your username.
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-6 w-full md:flex-row flex-col gap-y-2">
          <div className="md:min-w-[125px] text-right font-semibold text-base">
            <p>Bio</p>
          </div>
          <div className="flex-grow w-full">
            <textarea
              type="text"
              rows={3}
              className="w-full focus:outline-none border border-neutral-200 rounded-sm px-3 py-1 resize-none"
              name="bio"
              value={form.bio}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />

            <p className="text-neutral-500 text-xs mt-2 w-11/12">
              Share with others a little about yourself.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-6 w-full md:flex-row flex-col gap-y-2">
          <div className="md:min-w-[125px] text-right font-semibold text-base"></div>
          <div className="flex-grow w-full">
            <p className="text-neutral-500 text-sm mt-2 w-11/12 font-semibold">
              Personal Information
            </p>
            <p className="text-neutral-500 text-xs w-11/12">
              Provide your personal information, even if the account is used for
              a business, a pet or something else. This won&apos;t be a part of
              your public profile.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-6 w-full md:flex-row flex-col gap-y-2">
          <div className="md:min-w-[125px] text-right font-semibold text-base">
            <p>Email</p>
          </div>
          <div className="flex-grow w-full">
            <input
              type="text"
              className="cursor-not-allowed w-full focus:outline-none border border-neutral-200 rounded-sm px-3 py-1"
              name="email"
              disabled={true}
              value={user.email}
            />
            <p className="mt-2 text-xs w-11/12">
              <span className="text-blue-btn">
                At this time you cannot change your email address.
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={handleSubmitClick}
          disabled={
            isLoading ||
            (form.bio === user.bio && form.fullName === user.fullName)
          }
          className={`mx-auto text-white bg-blue-btn px-3 py-1 rounded-lg font-semibold mt-2 min-w-[80px] ${
            form.bio === user.bio &&
            form.fullName === user.fullName &&
            'opacity-50'
          } ${isLoading && 'opacity-50 cursor-not-allowed'}`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
