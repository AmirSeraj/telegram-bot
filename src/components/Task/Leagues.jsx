import React, { useEffect, useState } from "react";
import CardLoading from "../CardLoading";
import CardBarComp from "./CardBarComp";
import { useTelegram } from "../../hooks/useTelegram";
import { FindIndexByName, images } from "../Trophy/data";

/**PATH */
const path = process.env.REACT_APP_URL + "api/landing/all-trophy";
/**PATH */

const Leagues = () => {
  const [loading, setLoading] = useState(false);
  const [trophies, setTrophies] = useState([]);
  const user = useTelegram();

  const getUserTrophies = async () => {
    setLoading(true);
    try {
      const response = await fetch(path + user?.user?.uuid_name, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const leagues = await response.json();
      setTrophies(leagues?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error2", error);
    }
  };

  useEffect(() => {
    if (user?.user?.uuid_name) {
      getUserTrophies();
    }
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </>
      ) : (
        <>
          {trophies.map((trophy, index) => {
            const trophyIndex = FindIndexByName(trophy.title);
            return (
              <CardBarComp
                key={index}
                img={images[trophyIndex]?.src}
                title={trophy.title}
                price={Number(trophy.amount).toLocaleString()}
                disabled={
                  Number(user?.balance) > Number(trophy.amount) ? false : true
                }
                present_value={Number(user?.balance)}
                final_value={Number(trophy.amount)}
                onCli
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default Leagues;
