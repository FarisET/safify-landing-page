// components/Toast.tsx
import React from "react";

type ToastProps = {
  message: string;
  description?: string;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, description, onClose }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-4 w-80 animate-slide-in">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-900">{message}</p>
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm ml-4">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
