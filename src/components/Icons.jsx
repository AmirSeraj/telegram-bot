import { VscFlame } from "react-icons/vsc";
import { IoFlashSharp } from "react-icons/io5";
import { IoMdBatteryCharging } from "react-icons/io";
import { FaHandPeace } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export const TaskIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="#99B8D0"
      version="1.1"
      viewBox="0 0 220 220"
      xmlSpace="preserve"
    >
      <path d="M211.5 15.022C211.5 6.726 204.774 0 196.478 0H23.522C15.226 0 8.5 6.726 8.5 15.022v189.955C8.5 213.274 15.226 220 23.522 220h172.955c8.297 0 15.022-6.726 15.022-15.022V15.022zM88.5 199h-49v-45h49v45zm0-67h-49V88h49v44zm0-66h-49V21h49v45zm56.303 133.63l-26.306-26.306 11.205-11.205 15.101 15.102 23.65-23.65 11.205 11.205-34.855 34.854zm0-66.6l-26.306-26.306 11.205-11.205 15.101 15.101 23.65-23.65 11.205 11.205-34.855 34.855zm0-66.601l-26.306-26.306 11.205-11.205 15.101 15.101 23.65-23.65 11.205 11.205-34.855 34.855z"></path>
    </svg>
  );
};

export const BatteryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="yellow"
      version="1.1"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
    >
      <path d="M42.536 4H36V0H24v4h-6.536A3.468 3.468 0 0014 7.464v49.072A3.468 3.468 0 0017.464 60h25.071A3.468 3.468 0 0046 56.536V7.464A3.468 3.468 0 0042.536 4zM44 56.536c0 .808-.657 1.464-1.464 1.464H17.464A1.465 1.465 0 0116 56.536V7.464C16 6.656 16.657 6 17.464 6H42.536C43.343 6 44 6.656 44 7.464v49.072z"></path>
      <path d="M37 29h-3V17.108a1.052 1.052 0 00-.236-.72c-.381-.467-1.264-.463-1.642.004a.858.858 0 00-.072.103l-9.9 15.979A.999.999 0 0023 34h4l.002 12.929h.001c.001.235.077.479.215.657.189.247.529.414.84.414.305 0 .636-.16.825-.398.04-.05.074-.103.104-.159l8.899-16.979A1.002 1.002 0 0037 29z"></path>
    </svg>
  );
};

export const FlameIcon = ({ color, size }) => {
  return <VscFlame color={color} size={size} />;
};

export const FlashIcon = ({ color, size }) => {
  return <IoFlashSharp color={color} size={size} />;
};

export const EnergyLimit = ({ color, size }) => {
  return <IoMdBatteryCharging color={color} size={size} />;
};

export const Hand = ({ color, size }) => {
  return <FaHandPeace color={color} size={size} />;
};

export const Robot = ({ color, size }) => {
  return <FaRobot color={color} size={size} />;
};

export const Close = ({ color, size, onClick }) => {
  return <IoMdClose onClick={onClick} color={color} size={size} />;
};
