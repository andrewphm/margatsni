import { useSelector } from 'react-redux';

const Sidebar = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div
      id="sidebar"
      className="flex flex-col flex-grow border border-red-500  sticky top-[90px] h-[500px]"
    >
      <div>Sidebar</div>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>1</p>
    </div>
  );
};

export default Sidebar;
