import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../common/Modal';
import apiCalls from 'src/apiCalls';
import { updateCurrentUser } from 'src/redux/userRedux';

const NotificationSettings = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [likeNotificationSetting, setLikeNotificationSetting] = useState(
    user?.settings.notifications.like
  );
  const [followNotificationSetting, setFollowNotificationSetting] = useState(
    user?.settings.notifications.follow
  );
  const [messageNotificationSetting, setMessageNotificationSetting] = useState(
    user?.settings.notifications.directMessage
  );

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await apiCalls.updateUser({
        ...user,
        settings: {
          ...user.settings,
          notifications: {
            like: likeNotificationSetting,
            follow: followNotificationSetting,
            directMessage: messageNotificationSetting,
          },
        },
      });

      dispatch(updateCurrentUser(data));

      setShowModal((prev) => true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          message={'Notification settings updated.'}
        />
      )}
      <div className="w-full h-full px-3 md:px-8 md:pt-4">
        <form className="w-full flex flex-col" onSubmit={handleFormSubmit}>
          <fieldset className="flex flex-col border-b pb-3 mt-3">
            <h2 className="font-medium text-base pb-1">Like</h2>
            <div>
              <div className="flex gap-x-2 items-center">
                <input
                  className="h-4 w-4 cursor-pointer"
                  type="radio"
                  name="likeNotificationSetting"
                  id="likeOn"
                  checked={likeNotificationSetting}
                  onChange={() => {
                    setLikeNotificationSetting((prev) => true);
                  }}
                />
                <label
                  className="text-sm font-medium cursor-pointer"
                  htmlFor="likeOn"
                >
                  From everyone
                </label>
              </div>
              <div className="flex gap-x-2 items-center">
                <input
                  onChange={() => {
                    setLikeNotificationSetting((prev) => false);
                  }}
                  className="h-4 w-4 cursor-pointer"
                  type="radio"
                  checked={!likeNotificationSetting}
                  name="likeNotificationSetting"
                  id="likeOff"
                />
                <label
                  className="text-sm font-medium cursor-pointer"
                  htmlFor="likeOff"
                >
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
                  className="h-4 w-4 cursor-pointer"
                  type="radio"
                  name="followNotificationSetting"
                  id="followOn"
                  checked={followNotificationSetting}
                  onChange={() => setFollowNotificationSetting((prev) => true)}
                />
                <label
                  className="text-sm font-medium cursor-pointer"
                  htmlFor="followOn"
                >
                  From everyone
                </label>
              </div>
              <div className="flex gap-x-2 items-center">
                <input
                  className="h-4 w-4 cursor-pointer"
                  type="radio"
                  name="followNotificationSetting"
                  id="followOff"
                  checked={!followNotificationSetting}
                  onChange={() => setFollowNotificationSetting((prev) => false)}
                />
                <label
                  className="text-sm font-medium cursor-pointer"
                  htmlFor="followOff"
                >
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
                  className="h-4 w-4 cursor-pointer"
                  type="radio"
                  name="directMessageNotification"
                  id="directMessageOn"
                  checked={messageNotificationSetting}
                  onChange={() => setMessageNotificationSetting((prev) => true)}
                />
                <label
                  className="text-sm font-medium cursor-pointer"
                  htmlFor="directMessageOn"
                >
                  From everyone
                </label>
              </div>
              <div className="flex gap-x-2 items-center">
                <input
                  className="h-4 w-4 cursor-pointer"
                  type="radio"
                  name="directMessageNotification"
                  id="directMessageOff"
                  checked={!messageNotificationSetting}
                  onChange={() =>
                    setMessageNotificationSetting((prev) => false)
                  }
                />
                <label
                  className="text-sm font-medium cursor-pointer"
                  htmlFor="directMessageOff"
                >
                  Off
                </label>
              </div>
            </fieldset>
            <p className="text-xs text-neutral-600 my-[2px]">
              johndoe sent you a new message.
            </p>
          </div>

          <input
            type="submit"
            value="Save Settings"
            disabled={
              user?.settings.notifications.like == likeNotificationSetting &&
              user?.settings.notifications.follow ==
                followNotificationSetting &&
              user?.settings.notifications.directMessage ==
                messageNotificationSetting
            }
            className={`bg-blue-btn text-white py-1 px-3 rounded-sm shadow-sm  transition text-medium max-w-[200px] my-4 ${
              user?.settings.notifications.like == likeNotificationSetting &&
              user?.settings.notifications.follow ==
                followNotificationSetting &&
              user?.settings.notifications.directMessage ==
                messageNotificationSetting
                ? 'opacity-30 cursor-not-allowed'
                : 'cursor-pointer'
            }`}
          />
        </form>
      </div>
    </>
  );
};

export default NotificationSettings;
