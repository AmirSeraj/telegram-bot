import React, { useEffect, useState } from "react";
import RootLayout from "../../components/Layout";
import bgImg from "../../assets/bg_images/bg-4.png";
import { useTelegram } from "../../hooks/useTelegram";
import LayoutLoading from "../../components/LoadingComponent/LayoutLoading";
import TrophySlider from "../../components/Trophy/TrophySlider";

/**PATH */
const path = process.env.REACT_APP_URL + "api/landing/all-trophy";
/**PATH */

const TrophyPage = ({ trophy }) => {
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
      console.log("trophies", result);
      setTrophies(result?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error2", error);
    }
  };

  useEffect(() => {
    getTrophies();
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
          <div className="flex flex-col justify-between items-center w-full h-full p-0">
            <div className="flex justify-center items-center flex-col gap-2">
              <h1 className="text-white font-bold text-2xl">
                {user?.user_trophy}
              </h1>
              <p className="text-slate-400 text-center text-sm">
                Your number of shares determines the league you enter.
              </p>
            </div>
            {/* <div className="flex justify-center items-center w-full"> */}
              <TrophySlider trophies={trophies} loading={loading} />
            {/* </div>{" "} */}
            <div>cc</div>
          </div>
        </RootLayout>
      )}
    </>
  );
};

export default TrophyPage;
