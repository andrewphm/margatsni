import Layout from '~/components/layouts/Layout';
import { useState } from 'react';
import SettingTab from '~/components/profile_settings/SettingTab';
import PrivacySettings from '~/components/profile_settings/PrivacySettings';
import ProfileSettings from '~/components/profile_settings/ProfileSettings';
import NotificationSettings from '~/components/profile_settings/NotificationSettings';
import PasswordSettings from '~/components/profile_settings/PasswordSettings';

const Settings = () => {
  const [tab, setTab] = useState('profile');

  return (
    <Layout>
      <section className="w-full max-w-4xl border bg-white grid grid-cols-[64px,_4fr] md:grid-cols-[1fr,_4fr] min-h-[80vh] mx-auto md:mt-10">
        <SettingTab tab={tab} setTab={setTab} />
        {tab === 'profile' && <ProfileSettings />}
        {tab === 'password' && <PasswordSettings />}
        {tab === 'notification' && <NotificationSettings />}
        {tab === 'privacy' && <PrivacySettings />}
      </section>
    </Layout>
  );
};

export default Settings;
