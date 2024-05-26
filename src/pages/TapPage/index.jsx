import { useEffect, useReducer, useRef, useState } from "react";
import CoinIcon from "../../components/Tap/CoinIcon";
import ScoreBar from "../../components/Tap/ScoreBar";
import bgImg from "../../assets/bg_images/bg-2.png";
import RootLayout from "../../components/Layout";
import Balance from "../../components/Balance";
import { useTelegram } from "../../hooks/useTelegram";
import ProgressBarLoading from "../../components/TapLoading/ProgressBarLoading";

/**PATH */
const user_balance_path =
  process.env.REACT_APP_URL + "api/landing/info-t_balance";
const user_trophy_path = process.env.REACT_APP_URL + "api/landing/info-trophy";
const energy_unit_path = process.env.REACT_APP_URL + "api/landing/info-energy";
const coin_fill_speed_path =
  process.env.REACT_APP_URL + "api/landing/info-recharging";
/**PATH */

const Home = ({ socket }) => {
  const user = useTelegram();
  const [balance, setBalance] = useState(0);
  const [trophy, setTrophy] = useState(null);
  const [energyUnit, setEnergyUnit] = useState(null);
  const [increaseSpeed, setIncreaseSpeed] = useState(null);
  const [loading_one, setLoading_one] = useState(false);
  const [loading_two, setLoading_two] = useState(false);
  const [loading_three, setLoading_three] = useState(false);
  const [loading_four, setLoading_four] = useState(false);

  /***socket */
  // const userId = user?.user?.uuid_name;
  // useEffect(() => {
  //   console.log(userId, "dddd");
  //   if (userId) {
  //     socket.emit("id", userId);
  //   }
  // }, [userId, socket]);

  /**1.balance or coin number */
  const getBalance = async () => {
    setLoading_one(true);
    if (user?.user?.uuid_name) {
      try {
        const response = await fetch(user_balance_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user?.user?.uuid_name,
          },
        });
        const result = await response.json();
        // console.log("statssss", result);
        setBalance(Number(result?.amount));
        setLoading_one(false);
      } catch (error) {
        setLoading_one(false);
        console.log("error2", error);
      }
    }
  };

  /**2.trophy or league type */
  const getTrophy = async () => {
    setLoading_two(true);
    if (user?.user?.uuid_name) {
      try {
        const response = await fetch(user_trophy_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user?.user?.uuid_name,
          },
        });
        const result = await response.json();
        // console.log("trophy", result);
        setTrophy(result); ////balanceRef
        setLoading_two(false);
      } catch (error) {
        setLoading_two(false);
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
    setLoading_three(true);
    if (user?.user?.uuid_name) {
      try {
        const response = await fetch(energy_unit_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user?.user?.uuid_name,
          },
        });
        const result = await response.json();
        // console.log("energy_unit", result);
        setEnergyUnit(result); ////balanceRef
        setLoading_three(false);
      } catch (error) {
        setLoading_three(false);
        console.log("error2", error);
      }
    }
  };

  /**4.speed of increase or recharging speed */
  const getRechargingSpeed = async () => {
    setLoading_four(true);
    if (user?.user?.uuid_name) {
      try {
        const response = await fetch(coin_fill_speed_path, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user?.user?.uuid_name,
          },
        });
        const result = await response.json();
        // console.log("increase_speed", result);
        setIncreaseSpeed(result); ////balanceRef
        setLoading_four(false);
      } catch (error) {
        setLoading_four(false);
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

  useEffect(() => {
    socket.on("tap", (data) => {
      console.log("dddfff", data);
      // setBalance((prevBalance) => prevBalance + Number(energyUnit?.unit));
      setBalance((prevBalance) => prevBalance + Number(data));
      setCurrentSpark((prevSpark) => Math.max(prevSpark - data, 0));
      // setCurrentSpark((prevSpark) => Math.max(prevSpark - energyUnit?.unit, 0));
    });
  }, [socket]);

  const handleCoinClick = () => {
    socket.emit(
      "tap",
      {
        id: user?.user?.uuid_name,
        // level: user?.level?.title,
        level: 3,
      },
      function (data) {
        console.log("data:", data);
      }
    );
  };

  // useEffect(() => {
  //   socket.on("tap", (data) => {
  //     console.log('socket_on:', data);
  //   });
  // }, []);

  // console.log('wwweee',user?.level?.title);
  // const handleCoinClick = () => {
  //   socket.emit("tap", `${user?.level?.title}`, function (data) {
  //     console.log("data:", data);
  //   });
  // };

  // const socketRef = useRef(null);

  // if (!socketRef.current) {
  //   socketRef.current = io(process.env.REACT_APP_URL_SOCKET_GO);
  // }

  // useEffect(() => {
  //   socketRef.current.once("connect", () => console.log("connected")); // only 1 connection established
  //   return () => {
  //     socketRef.current.off("disconnect", () => {});
  //     socketRef.current.disconnect();
  //   };
  // }, []);

  // const handleCoinClick = () => {
  //   if (socketRef.current) {
  //     socketRef.current.emit("tap", `${user?.level?.title}`, function (data) {
  //       console.log("emitted");
  //       // const new_balance = balance + Number(energyUnit?.unit);
  //       if (data) {
  //         setBalance((prevBalance) => prevBalance + Number(energyUnit?.unit));
  //         setCurrentSpark((prevSpark) =>
  //           Math.max(prevSpark - energyUnit?.unit, 0)
  //         );
  //       }
  //     });
  //   }
  // };

  ////////////////******************************** */

  /**when click on coin */
  // const handleCoinClick = () => {
  // setBalance((prevBalance) => prevBalance + Number(energyUnit?.unit));
  // setCurrentSpark((prevSpark) => Math.max(prevSpark - energyUnit?.unit, 0));
  // console.log("balance", balance);
  // const new_balance = balance + Number(energyUnit?.unit);
  // console.log(user?.uuid_name);
  /**socket settings */
  // if (socket_app.current) {
  //   socket_app.current.emit("tap", `${user?.level?.title}`, function (data) {
  //     console.log(
  //       "socket emitted and click on coin, user level:",
  //       user?.level?.title,
  //       "data:",
  //       data
  //     );
  //     if (data) {
  //       setBalance((prevBalance) => prevBalance + Number(energyUnit?.unit));
  //       setCurrentSpark((prevSpark) =>
  //         Math.max(prevSpark - energyUnit?.unit, 0)
  //       );
  //     }
  //   });
  // }
  // };

  // useEffect(() => {
  //   setBalance((prevBalance) => prevBalance + Number(energyUnit?.unit));
  //   setCurrentSpark((prevSpark) => Math.max(prevSpark - energyUnit?.unit, 0));
  // }, [socket_send.current]);

  // useEffect(() => {
  //   socket_receive.current = io.connect(
  //     process.env.REACT_APP_URL_SOCKET + "laravel." + user?.uuid_name
  //   );
  //   socket_receive_token.current.on("receive_message", (data) => {
  //     console.log("data", data);
  //     setBalance(data);
  //   });
  // }, [user?.uuid_name]);

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

  return (
    <>
      {user?.loading ? (
        <div>Loading</div>
      ) : (
        <RootLayout
          bg_img={bgImg}
          // bg_radial={
          //   "radial-gradient(ellipse at 0% 40%, rgb(224, 224, 65) -7%, transparent 40%)"
          // }
        >
          <div className="flex flex-col items-center justify-around w-full h-full">
            <Balance balance={balance} cup={true} loading={loading_one} />

            <CoinIcon
              balance={balance}
              increment={energyUnit?.unit}
              onCoinClick={handleCoinClick}
              currentSpark={currentSpark}
            />

            {loading_three && loading_four ? (
              <ProgressBarLoading />
            ) : (
              <ScoreBar
                maxLimitSpark={energyUnit?.size}
                incrementSparkNumber={incrementSparkNumber}
                currentSpark={currentSpark}
                setCurrentSpark={setCurrentSpark}
              />
            )}
          </div>
        </RootLayout>
      )}
    </>
  );
};

export default Home;
