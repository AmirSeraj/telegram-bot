import React, { useEffect, useState } from "react";
import RootLayout from "../../components/Layout";
import bgImg from "../../assets/bg_images/bg-4.png";
import { useTelegram } from "../../hooks/useTelegram";
import LayoutLoading from "../../components/LoadingComponent/LayoutLoading";
import TrophySlider from "../../components/Trophy/TrophySlider";

/**PATH */
const path = process.env.REACT_APP_URL + "api/landing/all-trophy";
/**PATH */

const TrophyPage = () => {
  const user = useTelegram();
  const [loading, setLoading] = useState(false);
  const [trophies, setTrophies] = useState([]);

  const getTrophies = async () => {
    setLoading(true);
    try {
      const response = await fetch(path, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const result = await response.json();
      setTrophies(result?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTrophies();
    user.getBalance();
  }, []);

  return (
    <>
      {user?.rootLoading ? (
        <LayoutLoading />
      ) : (
        <RootLayout
          bg_img={bgImg}
          // bg_radial={
          //   "radial-gradient(ellipse at 0% 40%, rgb(224, 224, 65) -7%, transparent 40%)"
          // }
        >
          <div className="w-full h-full">
            <TrophySlider
              trophies={trophies}
              loading={loading}
              user_trophy={user?.user_trophy}
              user_balance={user?.balance}
            />
          </div>
        </RootLayout>
      )}
    </>
  );
};

export default TrophyPage;
