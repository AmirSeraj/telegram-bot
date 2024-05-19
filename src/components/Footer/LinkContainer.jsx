import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const LinkContainer = ({ key, src, name, href }) => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];
  return (
    <Link
      to={href}
      key={key}
      className={clsx(
        "flex flex-col gap-2 sm:p-3 p-2 border-[1px] border-slate-400 bg-[#140634] rounded-md items-center",
        pathname === name && 'border-[1px] border-[gold]/70 bg-[gold]/60'
      )}
    >
      <img src={src} alt={name} />
      <span className="text-xs capitalize">{name}</span>
    </Link>
  );
};

export default LinkContainer;
