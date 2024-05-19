import React from "react";
import LinkContainer from "./LinkContainer";

const data = [
  {
    icon: "dferfr",
    name: "Ref",
  },
  {
    icon: "dferfr",
    name: "Ref",
  },
  {
    icon: "dferfr",
    name: "Ref",
  },
  {
    icon: "dferfr",
    name: "Ref",
  },
  {
    icon: "dferfr",
    name: "Ref",
  },
];

const FooterContainer = () => {
  return (
    <footer className="flex gap-2">
      {data.map((item, index) => (
        <LinkContainer key={index} icon={item.icon} name={item.name} />
      ))}
    </footer>
  );
};

export default FooterContainer;
