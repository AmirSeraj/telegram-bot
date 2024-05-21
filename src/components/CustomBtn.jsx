import clsx from "clsx";
import React from "react";

const CustomBtn = ({ title, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "text-white text-xs rounded-lg shadow-lg py-1.5 px-4",
        className
      )}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
