import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold focus:outline-none"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
