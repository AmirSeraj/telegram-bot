import RootLayout from "../../components/Layout";
import bgImg from "../../assets/bg_images/bg-3.png";
import Balance from "../../components/Balance";
import { useState } from "react";

const TaskPage = () => {
  const [special, setSpecial] = useState(false);
  const [league, setLeague] = useState(false);
  const [tasks, setTasks] = useState(false);

  return (
    <RootLayout
      bg_img={bgImg}
      // bg_radial={
      //   "radial-gradient(ellipse at 30% 40%, rgb(224, 224, 65) -7%, transparent 40%)"
      // }
    >
      <Balance
        balance={Number(14589).toLocaleString()}
        cup={true}
        border={true}
      />
      <div className="border border-gray-500 p-1 rounded-lg w-full h-14 mt-5 grid grid-cols-3 gap-1">
        <div className="border border-gray-500 rounded-lg flex justify-center items-center text-white bg-black/50">
          Special
        </div>
        <div className="border border-gray-500 rounded-lg flex justify-center items-center text-white bg-black/50">Special</div>
        <div className="border border-gray-500 rounded-lg flex justify-center items-center text-white bg-black/50">Special</div>
      </div>
    </RootLayout>
  );
};

export default TaskPage;
