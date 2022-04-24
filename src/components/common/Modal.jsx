import { useEffect } from 'react';

const Modal = ({ message, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal((prev) => !prev);
    }, 10000);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-screen animate-[modalSlideDown_2s_ease]">
      <div className="mx-auto w-3/4 bg-green-400 rounded-b-md">
        <p className="text-base text-center text-white font-semibold py-3">
          {message || 'Success'}
        </p>
      </div>
    </div>
  );
};

export default Modal;
