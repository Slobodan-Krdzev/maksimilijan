// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-5 rounded-lg shadow-lg z-50">
        {children}
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          onClick={onClose}
        >
          Затвори
        </button>
      </div>
    </div>
  );
};

export default Modal;
