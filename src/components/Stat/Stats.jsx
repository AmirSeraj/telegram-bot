import React from "react";

const Stats = ({ description, total }) => {
  return (
    <div className="my-2 flex flex-col gap-1 justify-center items-center">
      <span className="text-sm text-gray-200">{description}</span>
      <h1 className="text-white text-2xl">{Number(total).toLocaleString()}</h1>
    </div>
  );
};

export default Stats;
