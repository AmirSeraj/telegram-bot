import { useState } from "react";
import bgImg from "../../assets/bg_images/bg-6.png";
import Balance from "../../components/Balance";
import Boosters from "../../components/Boosters/Boosters";
import DailyBooster from "../../components/DailyBooster";
import { FlameIcon, FlashIcon } from "../../components/Icons";
import RootLayout from "../../components/Layout";
import { useTelegram } from "../../hooks/useTelegram";

/**PATH */
const path = process.env.REACT_APP_URL + "api/landing/info-stats";
/**PATH */

const BoostPage = () => {
  const [loading, setLoading] = useState(false);
  const [boost, setBoost] = useState([]);

  /**in real decomment these */
  const user = useTelegram();
  // useEffect(() => {
  //   const telegramInfo = JSON.parse(telegram.user);
  //   const userId = telegramInfo.id;
  //   console.log("ueee", userId);
  // }, [telegram]);

  

  return (
    <RootLayout
      bg_img={bgImg}
      // bg_radial={
      //   "radial-gradient(ellipse at 30% 40%, rgb(224, 224, 65) -27%, transparent 40%)"
      // }
    >
      <Balance
        balance={Number(14589).toLocaleString()}
        border={true}
        description={"Your Share balance"}
      />
      <div className="flex flex-col gap-2">
        <p className="text-2xl text-white mt-4 mb-2 font-bold">
          Your Daily boosters :
        </p>
        <div className="grid grid-cols-2 gap-2">
          <DailyBooster
            icon={<FlameIcon size={28} color={"yellow"} />}
            name={"Taping Guru"}
            remain_num={1}
          />
          <DailyBooster
            icon={<FlashIcon size={28} color={"yellow"} />}
            name={"Full Tank"}
            remain_num={3}
          />
        </div>
      </div>
      <Boosters />
    </RootLayout>
  );
};

export default BoostPage;
