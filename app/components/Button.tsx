"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  custom?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, disabled, outlined, small, custom, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      disabled:opacity-70 
      disabled:cursor-not-allowed 
      rounded-md 
      hover:opacity-80 
      transition 
      w-full
      border-slate-700 
      flex 
      items-center 
      justify-center 
      gap-2 
      ${outlined ? "bg-white" : "bg-slate-700"}
      ${outlined ? "text-slate-700" : "text-white"}
      ${small ? "text-sm font-light" : "text-md font-semibold"}
      ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"}
      ${custom ? custom : ""}
      `}
    >
      {Icon && <Icon size={24} />} {label} {custom && "Custom"} {outlined && "Outlined"} {small && "Small"}{" "}
      {disabled && "Disabled"}
    </button>
  );
};

export default Button;
