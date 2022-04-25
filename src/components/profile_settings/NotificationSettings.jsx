const NotificationSettings = () => {
  const handleNotificationChange = (e) => {};

  return (
    <div className="w-full h-full px-3 md:px-8 md:pt-4">
      <form
        className="w-full flex flex-col"
        onChange={handleNotificationChange}
      >
        <fieldset className="flex flex-col border-b pb-3 mt-3">
          <h2 className="font-medium text-base pb-1">Like</h2>
          <div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="likeOff"
                id="likeOn"
                value="on"
                checked={true}
              />
              <label className="text-sm font-medium" htmlFor="likeOn">
                From everyone
              </label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="likeOff"
                id="likeOff"
                value="off"
                checked={false}
              />
              <label className="text-sm font-medium" htmlFor="likeOff">
                Off
              </label>
            </div>
          </div>
          <p className="text-xs text-neutral-600 my-[2px]">
            johndoe liked your post.
          </p>
        </fieldset>

        <fieldset className="flex flex-col border-b pb-3 mt-3">
          <h2 className="font-medium text-base pb-1">Follow</h2>
          <div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="likeOff"
                id="likeOn"
                value="on"
                checked={true}
              />
              <label className="text-sm font-medium" htmlFor="likeOn">
                From everyone
              </label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="likeOff"
                id="likeOff"
                value="off"
                checked={false}
              />
              <label className="text-sm font-medium" htmlFor="likeOff">
                Off
              </label>
            </div>
          </div>
          <p className="text-xs text-neutral-600 my-[2px]">
            johndoe started following you.
          </p>
        </fieldset>

        <div className="flex flex-col border-b pb-3 mt-3">
          <h2 className="font-medium text-base pb-1">Direct message</h2>
          <fieldset>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="likeOff"
                id="likeOn"
                value="on"
              />
              <label className="text-sm font-medium" htmlFor="likeOn">
                From everyone
              </label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="likeOff"
                id="likeOff"
                value="off"
              />
              <label className="text-sm font-medium" htmlFor="likeOff">
                Off
              </label>
            </div>
          </fieldset>
          <p className="text-xs text-neutral-600 my-[2px]">
            johndoe sent you a new message.
          </p>
        </div>
      </form>
    </div>
  );
};

export default NotificationSettings;
