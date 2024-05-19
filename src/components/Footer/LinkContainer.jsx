import clsx from "clsx";
import React from "react";

const LinkContainer = ({ key, icon, name }) => {
  return (
    <div
      key={key}
      className={clsx(
        "flex flex-col gap-2 p-2 bg-slate-400 rounded-md items-center"
      )}
    >
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default LinkContainer;
