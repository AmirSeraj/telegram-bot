import { useEffect, useRef, useState } from "react";
import CoinIcon from "../../components/Tap/CoinIcon";
import ScoreBar from "../../components/Tap/ScoreBar";
import bgImg from "../../assets/bg_images/bg-2.png";
import RootLayout from "../../components/Layout";
import Balance from "../../components/Balance/Balance";
import { useTelegram } from "../../hooks/useTelegram";
import LayoutLoading from "../../components/LoadingComponent/LayoutLoading";
import Loading from "../../components/LoadingComponent/Loading";

/**PATH */
const energy_unit_path = process.env.REACT_APP_URL + "api/landing/info-energy";
const coin_fill_speed_path =
  process.env.REACT_APP_URL + "api/landing/info-recharging";
const last_energy_path = process.env.REACT_APP_URL + "api/data/get-data";
/**PATH */

const Home = ({ socket }) => {
  const user = useTelegram();
  const [balance, setBalance] = useState(0);
  const [energyUnit, setEnergyUnit] = useState(0);
  const [increaseSpeed, setIncreaseSpeed] = useState(0);

  // const [loadingEnergy, setLoadingEnergy] = useState(false);
  // const [loadingRecharging, setLoadingRecharging] = useState(false);
  // const [loadingLastEnergy, setLoadingLastEnergy] = useState(false);
  const [currentSpark, setCurrentSpark] = useState(null);
  const [initialSpark, setInitialSpark] = useState(null);
  // const scoreRef = useRef(null);

  useEffect(() => {
    // user?.getBalance();
    getEnergyUnit();
    getRechargingSpeed();
    getLastEnergy();
    setBalance(Number(user?.balance));
  }, [user?.rootLoading]);

  const getEnergyUnit = async () => {
    // setLoadingEnergy(true);
    if (user?.user?.uuid_name) {
      try {
        const response = await fetch(energy_unit_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user?.userTeleId,
          },
        });
        const result = await response.json();
        setEnergyUnit(result);
        // setLoadingEnergy(false);
      } catch (error) {
        // setLoadingEnergy(false);
      }
    }
  };

  const getLastEnergy = async () => {
    // setLoadingLastEnergy(true);
    if (user?.user?.uuid_name) {
      try {
        const response = await fetch(last_energy_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            // "info-user": user?.user?.uuid_name,
            "info-user": user?.userTeleId,
          },
        });
        const result = await response.json();
        setCurrentSpark(Number(result?.energyLast));
        setInitialSpark(Number(result?.energyLast));
        // setLoadingLastEnergy(false);
      } catch (error) {
        // setLoadingLastEnergy(false);
      }
    }
  };

  /**4.speed of increase or recharging speed */
  const getRechargingSpeed = async () => {
    // setLoadingRecharging(true);
    if (user?.user?.uuid_name) {
      try {
        const response = await fetch(coin_fill_speed_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user?.userTeleId,
          },
        });
        const result = await response.json();
        setIncreaseSpeed(result); ////balanceRef
        // setLoadingRecharging(false);
      } catch (error) {
        // setLoadingRecharging(false);
      }
    }
  };

  useEffect(() => {
    socket.on("top", (data) => {
      setBalance((prevState) => prevState + Number(data));
      // scoreRef.current = data;
      // setCurrentSpark((prevSpark) => Math.max(prevSpark - data, 0));
    });

    socket.on("energy", (data) => {
      setCurrentSpark(Number(data));
    });

    socket.emit(
      "id",
      {
        id: user?.userTeleId,
        limit: Number(energyUnit?.size),
        speed: Number(increaseSpeed?.unit),
        energy: Number(currentSpark),
      },
      (data) => {}
    );
  }, [socket]);

  useEffect(() => {
    socket.emit(
      "id",
      {
        id: user?.userTeleId,
        limit: Number(energyUnit?.size),
        speed: Number(increaseSpeed?.unit),
        energy: Number(initialSpark),
      },
      (data) => {}
    );
  }, [
    user?.userTeleId,
    energyUnit?.size,
    increaseSpeed?.unit,
    initialSpark,
  ]);

  const handleCoinClick = () => {
    socket.emit(
      "tap",
      {
        id: user?.userTeleId,
        level: user?.level?.title,
      },
      function (data) {
      }
    );
    // setBalance((prevBalance) => prevBalance + Number(user?.level?.unit));
  };

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
          {user?.loading ? (  /**this is balance loading */
            <Loading />
          ) : (
            <div className="flex flex-col items-center justify-around w-full h-full">
              <Balance balance={balance} cup={true} />

              <CoinIcon
                balance={balance}
                increment={user?.level?.unit}
                // increment={scoreRef.current}
                onCoinClick={handleCoinClick}
                currentSpark={currentSpark}
              />

              {/* {loadingRecharging ? (
          <ProgressBarLoading />
        ) : ( */}
              <ScoreBar
                maxLimitSpark={energyUnit?.size}
                incrementSparkNumber={Number(increaseSpeed?.unit)}
                currentSpark={currentSpark}
                // setCurrentSpark={setCurrentSpark}
              />
              {/* )} */}
            </div>
          )}
        </RootLayout>
      )}
    </>
  );
};

export default Home;
