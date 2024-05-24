import { useEffect } from "react";
import bgImg from "../../assets/bg_images/bg-1.png";
import Balance from "../../components/Balance";
import RootLayout from "../../components/Layout";
import Stats from "../../components/Stat/Stats";
import { useTelegram } from "../../hooks/useTelegram";

const StatsPage = () => {
  const telegram = useTelegram();
  const userId = telegram.user.id;
  console.log("user_id", userId);
  console.log("telegram", telegram);
  console.log("parased_id", JSON.parse(JSON.stringify(telegram)));
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
