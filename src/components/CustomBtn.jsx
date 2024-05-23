import clsx from "clsx";
import React from "react";

const CustomBtn = ({ title, onClick, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "text-xs rounded-lg shadow-lg py-1.5 px-4",
        disabled
          ? "bg-slate-900 text-slate-700"
          : "bg-gradient-to-b from-violet-600 via-violet-800 to-violet-950 text-white",
        className
      )}
    >
      {title}
    </button>
  );
};

export default CustomBtn;
