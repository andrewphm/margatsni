import Image from 'next/image';
import { useSelector } from 'react-redux';
import nopfp from '../../../public/images/nopfp.jpeg';
import { useState } from 'react';
import Link from 'next/link';
import apiCalls from 'src/apiCalls';
import Modal from '../common/Modal';

const initialForm = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

const PasswordSettings = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [form, setForm] = useState(initialForm);
  const [showModal, setShowModal] = useState(false);

  const handleFormChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await apiCalls.changePassword(user?.username, form);

      if (res.status === 200) {
        setShowModal((prev) => !prev);
      }

      setForm((prev) => initialForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          message="Successfully Changed Password"
          setShowModal={setShowModal}
        />
      )}
      <div className="w-full min-h-[70vh] px-1 py-4 xs:px-5 sm:px-8 sm:py-8">
        <div className="flex items-center gap-x-4 mb-3">
          <div className="flex justify-end sm:min-w-[200px]">
            <Link href={`/${user?.username}`}>
              <a>
                <div className="relative min-w-[40px] min-h-[40px] max-h-[40px] max-w-[40px] md:min-h-[60px] md:min-w-[60px] md:max-h-[60px] md:max-w-[60px]">
                  <Image
                    src={user?.image || nopfp}
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
            <p className="font-medium text-lg md:text-2xl">{user?.username}</p>
          </div>
        </div>

        <form
          action=""
          className="w-full flex flex-col gap-y-3"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col sm:flex-row sm:gap-x-5">
            <label
              className="font-medium text-sm md:text-base min-w-[200px] sm:text-right"
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <input
              className="focus:outline-none bg-[#FAFAFA] flex-grow rounded-sm border min-w-[200px] py-1 px-1 mr-2"
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={form.oldPassword}
              onChange={handleFormChange}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-x-5">
            <label
              className="font-medium text-sm md:text-base min-w-[200px] sm:text-right"
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
          <div className="flex flex-col sm:flex-row sm:gap-x-5">
            <label
              className="font-medium text-sm md:text-base min-w-[200px] sm:text-right"
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

          <div className="flex flex-col sm:flex-row sm:gap-x-5 my-5">
            <div className="min-w-[200px]"></div>
            <input
              type="submit"
              disabled={
                form.oldPassword == '' ||
                form.newPassword == '' ||
                form.confirmNewPassword == ''
              }
              value="Change Password"
              className={`bg-blue-btn text-white py-1 px-3 rounded-sm shadow-sm  transition cursor-pointer text-medium max-w-[200px] ${
                form.oldPassword == '' ||
                form.newPassword == '' ||
                form.confirmNewPassword == ''
                  ? 'opacity-30 cursor-not-allowed'
                  : ''
              }`}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default PasswordSettings;
