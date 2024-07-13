import React from "react";

interface ButtonComponentProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  completed?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onClick, disabled = false, completed = false }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold rounded-md ${
        completed ? "bg-green-500 text-white" : disabled ? "bg-gray-300 cursor-not-allowed" : "bg-black text-white"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {completed ? "Completed" : text}
    </button>
  );
};

export default ButtonComponent;
