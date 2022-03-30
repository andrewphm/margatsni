import Layout from '~/components/layouts/Layout';
import { useState } from 'react';
import {
  ManageAccounts,
  Lock,
  Notifications,
  Shield,
} from '@mui/icons-material';

const Settings = () => {
  const [tab, setTab] = useState(null);

  return (
    <Layout>
      <section className="w-full max-w-4xl border bg-white grid grid-cols-[1fr,_4fr] min-h-[50vh]">
        <div className="overflow-hidden flex flex-col border-r">
          <div className="setting__tab">
            <ManageAccounts className="text-neutral-400" />
            <p className="setting__tab-text">Edit Profile</p>
          </div>
          <div className="setting__tab">
            <Lock className="text-neutral-400" />
            <p className="setting__tab-text">Change Password</p>
          </div>
          <div className="setting__tab">
            <Notifications className="text-neutral-400" />
            <p className="setting__tab-text">Notifications</p>
          </div>
          <div className="setting__tab">
            <Shield className="text-neutral-400" />
            <p className="setting__tab-text">Privacy and Security</p>
          </div>
        </div>
        <div>Info</div>
      </section>
    </Layout>
  );
};

export default Settings;
