import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="flex flex-col fixed right-0">
      <div>Sidebar</div>
    </div>
  );
};

export default Sidebar;
