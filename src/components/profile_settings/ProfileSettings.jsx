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

  const [photo, setPhoto] = useState(null);
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

  return (
    <div className="w-full">
      <div className="flex py-8 px-20">
        <div className="flex items-center gap-x-6">
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

        <div className="flex items-center gap-x-6"></div>
      </div>
    </div>
  );
};

export default ProfileSettings;
