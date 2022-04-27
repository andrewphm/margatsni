import { useState } from 'react';

const NotificationSettings = ({ notificationSettings }) => {
  const [likeNotificationSetting, setLikeNotificationSetting] = useState(
    notificationSettings?.likeNotificationSetting || false
  );
  const [followNotificationSetting, setFollowNotificationSetting] = useState(
    notificationSettings?.followNotificationSetting || false
  );
  const [messageNotificationSetting, setMessageNotificationSetting] = useState(
    notificationSettings?.messageNotificationSetting || false
  );

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
                name="likeNotificationSetting"
                id="likeOn"
                checked={likeNotificationSetting}
                onChange={() => {
                  setLikeNotificationSetting((prev) => true);
                }}
              />
              <label className="text-sm font-medium" htmlFor="likeOn">
                From everyone
              </label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                checked={!likeNotificationSetting}
                name="likeNotificationSetting"
                id="likeOff"
                onChange={() => {
                  setLikeNotificationSetting((prev) => false);
                }}
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
                name="followNotificationSetting"
                id="likeOn"
                checked={followNotificationSetting}
                onChange={() => setFollowNotificationSetting((prev) => true)}
              />
              <label className="text-sm font-medium" htmlFor="likeOn">
                From everyone
              </label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="followNotificationSetting"
                id="likeOff"
                checked={!followNotificationSetting}
                onChange={() => setFollowNotificationSetting((prev) => false)}
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
                name="directMessageNotification"
                id="likeOn"
                checked={messageNotificationSetting}
                onChange={() => setMessageNotificationSetting((prev) => true)}
              />
              <label className="text-sm font-medium" htmlFor="likeOn">
                From everyone
              </label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input
                className="h-4 w-4"
                type="radio"
                name="directMessageNotification"
                id="likeOff"
                checked={!messageNotificationSetting}
                onChange={() => setMessageNotificationSetting((prev) => false)}
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
