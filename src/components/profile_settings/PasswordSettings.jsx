import Image from 'next/image';
import { useSelector } from 'react-redux';
import nopfp from '../../../public/images/nopfp.jpeg';
import { useState } from 'react';
import Link from 'next/link';

const initialForm = {
  oldPassword: '',
  newPassword: '',
  confirmNewPaswword: '',
};

const PasswordSettings = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [form, setForm] = useState(initialForm);

  const handleFormChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log('hitting submit');
  };

  return (
    <div className="w-full min-h-[70vh] px-1 py-4">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="flex justify-end">
          <Link href={`/${user?.username}`}>
            <a>
              <div className="relative min-w-[40px] min-h-[40px] max-h-[40px] max-w-[40px]">
                <Image
                  src={user.image || nopfp}
                  alt="Profile photo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="flex flex-grow">
          <p className="font-medium text-lg">{user?.username}</p>
        </div>
      </div>

      <form
        action=""
        className="w-full flex flex-col gap-y-3"
        onSubmit={handleFormSubmit}
      >
        <div className="flex items-center flex-wrap">
          <label
            className="font-medium text-sm md:text-base"
            htmlFor="oldPassword"
          >
            Old Password
          </label>
          <input
            className="focus:outline-none bg-[#FAFAFA] flex-grow rounded-sm border min-w-[200px] py-1 px-1 mr-2"
            type="text"
            id="oldPassword"
            name="oldPassword"
            value={form.oldPassword}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center flex-wrap">
          <label
            className="font-medium text-sm md:text-base"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            className="focus:outline-none bg-[#FAFAFA] flex-grow rounded-sm border min-w-[200px] py-1 px-1 mr-2"
            type="password"
            id="newPassword"
            name="newPassword"
            value={form.newPassword}
            onChange={handleFormChange}
          />
        </div>
        <div className="flex items-center flex-wrap">
          <label
            className="font-medium text-sm md:text-base"
            htmlFor="confirmNewPassword"
          >
            Confirm New Password
          </label>
          <input
            className="focus:outline-none bg-[#FAFAFA] flex-grow rounded-sm border min-w-[200px] py-1 px-1 mr-2"
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={form.confirmNewPassword}
            onChange={handleFormChange}
          />
        </div>

        <div className="w-full flex justify-center">
          <input
            type="submit"
            disabled={true}
            value="Change Password"
            className="bg-blue-btn text-white py-1 px-3 rounded-sm shadow-sm hover:scale-[1.02] transition cursor-pointer text-medium"
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordSettings;
