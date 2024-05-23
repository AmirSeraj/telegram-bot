import clsx from "clsx";
import React from "react";

const Tab = ({ title, onClick, notComplete, className }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "border p-2 relative border-gray-500 rounded-lg flex justify-center items-center text-white bg-black/50",
        className
      )}
    >
      {title}
      {notComplete && (
        <div className="absolute w-2 h-2 rounded-full bg-red-700 top-1 right-1" />
      )}
    </div>
  );
};

export default Tab;
