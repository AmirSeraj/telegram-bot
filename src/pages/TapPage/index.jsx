import { useEffect, useReducer, useRef, useState } from "react";
import CoinIcon from "../../components/Tap/CoinIcon";
import ScoreBar from "../../components/Tap/ScoreBar";
import bgImg from "../../assets/bg_images/bg-2.png";
import RootLayout from "../../components/Layout";
import Balance from "../../components/Balance";
import { useTelegram } from "../../hooks/useTelegram";

/**PATH */
const user_balance_path =
  process.env.REACT_APP_URL + "api/landing/info-t_balance";
const user_trophy_path = process.env.REACT_APP_URL + "api/landing/info-trophy";
const energy_unit_path = process.env.REACT_APP_URL + "api/landing/info-energy";
const coin_fill_speed_path =
  process.env.REACT_APP_URL + "api/landing/info-recharging";
/**PATH */

const Home = () => {
  const user = useTelegram();
  const [balance, setBalance] = useState(null);
  const [trophy, setTrophy] = useState(null);
  const [energyUnit, setEnergyUnit] = useState(null);
  const [increaseSpeed, setIncreaseSpeed] = useState(null);

  /**1.balance or coin number */
  const getBalance = async () => {
    // setLoading(true);
    if (user?.uuid_name) {
      try {
        const response = await fetch(user_balance_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user.uuid_name,
          },
        });
        const result = await response.json();
        console.log("statssss", result);
        setBalance(result);
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.log("error2", error);
      }
    }
  };

  /**2.trophy or league type */
  const getTrophy = async () => {
    // setLoading(true);
    if (user?.uuid_name) {
      try {
        const response = await fetch(user_trophy_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user.uuid_name,
          },
        });
        const result = await response.json();
        console.log("trophy", result);
        setTrophy(result); ////balanceRef
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.log("error2", error);
      }
    }
  };

  /**3.energy limit or energy unit || how many units, energy increases when click on coin */
  /**
   * size : "15000" ===> energy limit like 50
   * title : "silvwer" ===> level title : no need in this page
   * unit : 4 =====> amount of increase per tab
   */
  const getEnergyUnit = async () => {
    // setLoading(true);
    if (user?.uuid_name) {
      try {
        const response = await fetch(energy_unit_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user.uuid_name,
          },
        });
        const result = await response.json();
        console.log("energy_unit", result);
        setEnergyUnit(result); ////balanceRef
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.log("error2", error);
      }
    }
  };

  /**4.speed of increase or recharging speed */
  const getRechargingSpeed = async () => {
    // setLoading(true);
    if (user?.uuid_name) {
      try {
        const response = await fetch(coin_fill_speed_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user.uuid_name,
          },
        });
        const result = await response.json();
        console.log("increase_speed", result);
        setIncreaseSpeed(result); ////balanceRef
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.log("error2", error);
      }
    }
  };

  useEffect(() => {
    getBalance();
    getTrophy();
    getEnergyUnit();
    getRechargingSpeed();
  }, []);

  const balanceRef = useRef({ value: 0 });
  const initialSparkRef = useRef({ value: 100 });
  const [currentSpark, setCurrentSpark] = useState(
    initialSparkRef.current.value
  ); /**the number energy or spark in bar */

  const forceUpdate = useReducer((x) => x + 1, 0)[1];

  // assume /**later these two numbers should be read from database */
  const maxLimitSpark = 50; /**max limit */
  const incrementSparkNumber = 3; /**with what number it should be added, 1, 2, ... */

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("Attempting to invoke autoClicker components.");
      balanceRef.current.value =
        Math.round(balanceRef.current.value * 100) / 100;
      forceUpdate();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleCoinClick = () => {
    setCurrentSpark((prevSpark) =>
      Math.max(prevSpark - energyUnit?.size, 0)
    );
  };

  return (
    <RootLayout
      bg_img={bgImg}
      // bg_radial={
      //   "radial-gradient(ellipse at 0% 40%, rgb(224, 224, 65) -7%, transparent 40%)"
      // }
    >
      <div className="flex flex-col items-center justify-around w-full h-full">
        <Balance balance={balance?.amount} cup={true} />
        <CoinIcon
          balance={balance?.amount}
          increment={energyUnit?.unit}
          onCoinClick={handleCoinClick}
          currentSpark={currentSpark}
        />
        <ScoreBar
          maxLimitSpark={energyUnit?.size}
          incrementSparkNumber={incrementSparkNumber}
          currentSpark={currentSpark}
          setCurrentSpark={setCurrentSpark}
        />
      </div>
    </RootLayout>
  );
};

export default Home;
