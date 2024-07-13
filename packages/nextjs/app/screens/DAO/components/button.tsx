import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 font-semibold rounded-md ${
        disabled ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white cursor-pointer"
      }`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
