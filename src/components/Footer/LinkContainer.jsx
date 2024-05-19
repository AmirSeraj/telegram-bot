import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

const LinkContainer = ({ key, icon, name, href }) => {
  return (
    <Link
      to={href}
      key={key}
      className={clsx(
        "flex flex-col gap-2 p-3 border-[1px] border-slate-400 bg-[#140634] rounded-md items-center"
      )}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};

export default LinkContainer;
