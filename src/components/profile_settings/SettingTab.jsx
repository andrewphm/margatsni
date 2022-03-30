import {
  ManageAccounts,
  Lock,
  Notifications,
  Shield,
} from '@mui/icons-material';

const SettingTab = ({ tab, setTab }) => {
  const handleTabClick = (e) => {
    let tabId = e.currentTarget.id;
    setTab((prev) => tabId);
  };

  return (
    <div className="overflow-hidden flex flex-col border-r max-w-[64px] sm:max-w-none">
      <div
        onClick={handleTabClick}
        id="profile"
        className={`setting__tab ${
          tab === 'profile' && 'border-l-4 border-l-black bg-neutral-100'
        }`}
      >
        <ManageAccounts
          className={`${tab === 'profile' ? 'text-black' : 'text-neutral-400'}`}
        />
        <p className="setting__tab-text">Edit Profile</p>
      </div>
      <div
        onClick={handleTabClick}
        id="password"
        className={`setting__tab ${
          tab === 'password' && 'border-l-4 border-l-black bg-neutral-100'
        }`}
      >
        <Lock
          className={`${
            tab === 'password' ? 'text-black' : 'text-neutral-400'
          }`}
        />
        <p className="setting__tab-text">Change Password</p>
      </div>
      <div
        onClick={handleTabClick}
        id="notification"
        className={`setting__tab ${
          tab === 'notification' && 'border-l-4 border-l-black bg-neutral-100'
        }`}
      >
        <Notifications
          className={`${
            tab === 'notification' ? 'text-black' : 'text-neutral-400'
          }`}
        />
        <p className="setting__tab-text">Notifications</p>
      </div>
      <div
        onClick={handleTabClick}
        id="privacy"
        className={`setting__tab ${
          tab === 'privacy' && 'border-l-4 border-l-black bg-neutral-100'
        }`}
      >
        <Shield
          className={`${tab === 'privacy' ? 'text-black' : 'text-neutral-400'}`}
        />
        <p className="setting__tab-text">Privacy and Security</p>
      </div>
    </div>
  );
};

export default SettingTab;
