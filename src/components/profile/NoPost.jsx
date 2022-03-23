import noposts from '../../../public/images/profile/noposts.jpg';
import applebadge from '../../../public/images/login/applestorebadge.png';
import googleplaybadge from '../../../public/images/login/googleplaybadge.png';
import Image from 'next/image';

export default function NoPost() {
  return (
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
          Star capturing and sharing your moments.
        </p>
        <p className="text-sm xs:text-base">
          Get the app to share your first photo or video.
        </p>

        <div className="flex w-full pt-4 justify-center gap-x-5">
          <div className="relative h-12 xs:w-40 w-32">
            <Image alt="" src={applebadge} layout="fill" objectFit="contain" />
          </div>
          <div className="relative h-12 xs:w-40 w-32">
            <Image
              alt=""
              src={googleplaybadge}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
