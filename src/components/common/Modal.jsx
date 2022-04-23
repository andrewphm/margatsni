import { useEffect } from 'react';

const Modal = ({ message, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal((prev) => !prev);
    }, 4000);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-full">
      <div className="mx-auto w-3/4 bg-green-400 rounded-b-md">
        <p className="text-sm text-center text-white font-medium py-2">
          {message || 'Success'}
        </p>
      </div>
    </div>
  );
};

export default Modal;
