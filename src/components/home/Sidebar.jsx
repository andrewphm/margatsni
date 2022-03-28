import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import nopfp from '../../../public/images/nopfp.jpeg';

const Sidebar = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div
      id="sidebar"
      className="hidden flex-col flex-grow sticky top-[90px] h-full max-w-[286px] lg1:flex"
    >
      <div className="flex gap-x-4 items-center">
        <Link href={`/${user?.username}`}>
          <a>
            <div className="relative w-16 h-16 rounded-full border border-neutral-300">
              <Image
                src={user?.image || nopfp}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
                alt=""
              />
            </div>
          </a>
        </Link>
        <div className="flex flex-col text-sm">
          <Link href={`/${user?.username}`}>
            <a>
              <p className="font-bold">{user?.username}</p>
            </a>
          </Link>
          <p className="text-neutral-500 font-medium">{user?.fullName}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-y-3">
        <div className="grid grid-cols-[4fr,_1fr] text-sm gap-2">
          <div>
            <p className="font-semibold text-neutral-500 whitespace-nowrap">
              Suggestions For You
            </p>
          </div>
          <div>
            <Link href={`/user/suggestions`}>
              <a className="text-blue-btn hover:underline font-semibold whitespace-nowrap text-[12px]">
                See All
              </a>
            </Link>
          </div>
        </div>

        <div className="pl-1 grid grid-cols-[4fr,_1fr] text-sm gap-2">
          <div className="flex items-center gap-x-2">
            <div className="relative w-10 h-10 rounded-full">
              <Image
                src={nopfp}
                alt=""
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-semibold whitespace-nowrap truncate">
                username
              </p>
              <p className="text-xs whitespace-nowrap truncate text-neutral-500 font-medium">
                New user
              </p>
            </div>
          </div>
          <div className="flex h-full items-center">
            <Link href={`/user/suggestions`}>
              <a className="text-blue-btn hover:underline font-semibold whitespace-nowrap text-[12px]">
                Follow
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 opacity-80">
        <ul className="flex flex-wrap text-xs text-neutral-400">
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            About
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Help
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Press
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            API
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Jobs
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Privacy
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Terms
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Locations
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Top Accounts
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Hashtags
          </li>
          <li className="after:content-['\00B7'] after:ml-[5px] after:mr-[5px]">
            Language
          </li>
        </ul>

        <p className="text-xs text-neutral-400 mt-2">© 2022 MARGATSNI</p>
      </div>
    </div>
  );
};

export default Sidebar;
