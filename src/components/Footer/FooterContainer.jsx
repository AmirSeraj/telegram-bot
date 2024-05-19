import React from "react";
import LinkContainer from "./LinkContainer";

const data = [
  {
    icon: "dferfr",
    name: "Ref",
    link:"/friends"
  },
  {
    icon: "dferfr",
    name: "Task",
    link:"/task"
  },
  {
    icon: "dferfr",
    name: "Tap",
    link:"/tap"
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
    <footer className="flex gap-4 justify-center">
      {data.map((item, index) => (
        <LinkContainer key={index} icon={item.icon} name={item.name} href={item.link} />
      ))}
    </footer>
  );
};

export default FooterContainer;
