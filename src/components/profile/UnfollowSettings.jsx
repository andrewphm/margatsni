import Image from 'next/image';
import nopfp from '../../../public/images/nopfp.jpeg';
import { useSelector } from 'react-redux';

export default function UnfollowSettings({
  setShowUnfollowSettings,
  userData,
  handleUnfollowClick,
}) {
  const handleCloseUnfollowSettings = (event) => {
    if (event.target.id === 'overlay') setShowUnfollowSettings((prev) => false);
  };

  return (
    <section
      id="overlay"
      className="fixed bottom-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70"
      onClick={handleCloseUnfollowSettings}
    >
      <div className="relative flex flex-col w-[300px] items-center rounded-xl bg-white shadow-lg">
        <div className="py-5">
          <div className="relative w-32 h-32">
            <Image
              alt=""
              layout="fill"
              className="rounded-full"
              src={userData.image || nopfp}
              priority={true}
            />
          </div>
          <p className="pt-4">Unfollow @{userData.username}?</p>
        </div>
        <ul className="w-full">
          <li
            onClick={() => {
              handleUnfollowClick();
              setShowUnfollowSettings((prev) => false);
            }}
            className="w-full border py-3 border-neutral-300 hover:bg-neutral-200 cursor-pointer"
          >
            <p className="text-red-600 text-center font-semibold">Unfollow</p>
          </li>
          <li
            onClick={() => setShowUnfollowSettings((prev) => false)}
            className="w-full py-3 hover:bg-neutral-200 cursor-pointer rounded-b-xl"
          >
            <p className="text-center">Cancel</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
