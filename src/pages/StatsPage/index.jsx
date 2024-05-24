import { useEffect, useState } from "react";
import bgImg from "../../assets/bg_images/bg-1.png";
import Balance from "../../components/Balance";
import RootLayout from "../../components/Layout";
import Stats from "../../components/Stat/Stats";
import { useTelegram } from "../../hooks/useTelegram";
import { useAuth } from "../../hooks/useAuth";

const StatsPage = () => {
  const [loading, setLoading] = useState(false);
  const user = useAuth();
  console.log(user);

  /**in real decomment these */
  // const telegram = useTelegram();
  // useEffect(() => {
  //   const telegramInfo = JSON.parse(telegram.user);
  //   const userId = telegramInfo.id
  // }, [telegram]);

  // const userId = 15465654;

  // const getTasks_Specials = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("fetch_get_all_tasks_specials", {
  //       method: "GET",
  //       headers: {
  //         "Content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     const tasks = await response.json();
  //     setTasks(tasks);
  //     setLoading(false);
  //     return tasks;
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("error2", error);
  //   }
  // };

  // useEffect(() => {
  //   setSpecial(true);
  //   getTasks_Specials();
  // }, []);

  // useEffect(() => {}, []);

  return (
    <RootLayout
      bg_img={bgImg}
      // bg_radial={
      //   "radial-gradient(ellipse at 90% 10%, rgb(224, 224, 65) -17%, transparent 50%)"
      // }
    >
      <Balance
        description={"Total Share Balance :"}
        balance={Number(4521).toLocaleString() + " T"}
        border={true}
      />
      <div className="mt-16 flex flex-col gap-2">
        <Stats description={"Total Touches:"} total={595962583168} />
        <Stats description={"Total Players:"} total={59583168} />
        <Stats description={"Daily Users:"} total={59596258} />
        <Stats description={"Online Players:"} total={539974} />
      </div>
    </RootLayout>
  );
};

export default StatsPage;
