import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useInitData } from "@vkruglikov/react-telegram-web-app";

const initialState = {
  loading: false,
  user: null,
  balance: 0,
  getUserInfo: () => Promise.resolve(),
  getBalance: () => Promise.resolve(),
};

/**PATH */
const user_balance_path =
  process.env.REACT_APP_URL + "api/landing/info-t_balance";
const user_info_path = process.env.REACT_APP_URL + "api/auth/login-register/";
const user_trophy_path = process.env.REACT_APP_URL + "api/landing/info-trophy";
/**PATH */

const TelegramContext = createContext({});

const TelegramProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user);
  const [loading, setLoading] = useState(initialState.loading);
  const [rootLoading, setRootLoading] = useState(initialState.loading);
  const [balance, setBalance] = useState(Number(initialState.balance));
  const [trophy, setTrophy] = useState(null);
  const [loadingTrophy, setLoadingTrophy] = useState(initialState.loading);
  const [teleAccountInfo, setTeleAccountInfo] = useState([]);
  const location = useLocation();
  const [initDataUnsafe] = useInitData();
  console.log('rrrtttttttt', initDataUnsafe?.user?.id );

  useEffect(() => {
    setRootLoading(true);
    const timer = setTimeout(() => {
      setRootLoading(false);
    }, 1000);

    // Clean up the timeout if the component unmounts before 5 seconds
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 1.
  // console.log("eeee", teleAccountInfo);
  const userId = JSON.parse(teleAccountInfo.user).id;

  useEffect(() => {
    const tele = window.Telegram?.WebApp;
    console.log("rrrrr", window.Telegram);
    if (tele) {
      tele.ready();
      const accountInfo = tele.initData;
      const userInfo = JSON.parse(
        '{"' + accountInfo.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
        function (key, value) {
          return key === "" ? value : decodeURIComponent(value);
        }
      );
      setTeleAccountInfo(userInfo);
    }
  }, []);

  useEffect(() => {
    if (teleAccountInfo) {
      getUserInfo();
      handleGetBalance();
      getTrophy();
    }
  }, [teleAccountInfo]);

  // 2.
  // const userId = 98798577877;
  // useEffect(() => {
  //   getUserInfo();
  //   handleGetBalance();
  //   getTrophy();
  // }, []);

  const getUserInfo = async () => {
    try {
      const response = await fetch(user_info_path + userId, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const userInfo = await response.json();
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetBalance = async () => {
    setLoading(true);
    try {
      const response = await fetch(user_balance_path, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          "info-user": userId,
        },
      });
      const result = await response.json();
      // console.log("statssss", result);
      setBalance(Number(result?.amount));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error2", error);
    }
  };

  /**2.trophy or league type */
  const getTrophy = async () => {
    setLoadingTrophy(true);
    try {
      const response = await fetch(user_trophy_path, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          "info-user": userId,
        },
      });
      const result = await response.json();
      console.log("trophy", result);
      setTrophy(result); ////balanceRef
      setLoadingTrophy(false);
    } catch (error) {
      setLoadingTrophy(false);
      console.log("error2", error);
    }
  };

  const values = {
    loading,
    rootLoading,
    balance,
    getBalance: handleGetBalance,
    user: user?.user,
    user_trophy: trophy?.title,
    loadingTrophy,
    level: user?.level,
    userTeleId: userId,
  };

  return (
    <TelegramContext.Provider value={values}>
      {children}
    </TelegramContext.Provider>
  );
};

export { TelegramContext, TelegramProvider };
