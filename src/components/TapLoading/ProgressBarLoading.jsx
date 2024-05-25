import React from "react";

const ProgressBarLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-pulse gap-3">
      <div className="flex justify-center items-center gap-2">
        <div className="w-4 bg-gray-300 h-4 rounded-md"></div>
        /
        <div className="w-4 bg-gray-300 h-4 rounded-md"></div>
      </div>
      <div className="w-80 bg-gray-300 h-4 rounded-md"></div>
    </div>
  );
};

export default ProgressBarLoading;
