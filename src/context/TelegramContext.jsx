import { createContext, useEffect, useState } from "react";

const initialState = {
  loading: false,
  user: null,
  balance: 0,
  getUserInfo: () => Promise.resolve(),
  getBalance: () => Promise.resolve(),
};

const user_balance_path =
  process.env.REACT_APP_URL + "api/landing/info-t_balance";
const TelegramContext = createContext({});

const TelegramProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user);
  const [loading, setLoading] = useState(initialState.loading);
  const [balance, setBalance] = useState(Number(initialState.balance));

  // useEffect(() => {
  //   const tele = window.Telegram.WebApp;
  //   if (tele) {
  //     tele.ready();
  //     const accountInfo = tele.initData;
  //     const userInfo = JSON.parse(
  //       '{"' + accountInfo.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
  //       function (key, value) {
  //         return key === "" ? value : decodeURIComponent(value);
  //       }
  //     );
  //     setTeleAccountInfo(userInfo);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (teleAccountInfo) {
  //     const userId = JSON.parse(teleAccountInfo.user).id;
  //     console.log('errr',typeof userId);
  //     const getUserInfo = async () => {
  //       try {
  //         const response = await fetch(
  //           process.env.REACT_APP_URL + "api/auth/login-register",
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-type": "application/json",
  //               'Accept': "application/json",
  //             },
  //             body: JSON.stringify({uuid_name : userId})
  //           }
  //         );
  //         const userInfo = await response.json();
  //         setUser(userInfo);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getUserInfo();
  //     console.log("trttrytyyt", user);
  //   }
  // }, [teleAccountInfo]);

  const userId = 98798577877;
  const getUserInfo = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_URL + "api/auth/login-register/" + userId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const userInfo = await response.json();
      setUser(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const getBalance = async () => {
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error2", error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getBalance();
  }, []);

  const values = {
    loading,
    balance,
    user
  }

  return (
    <TelegramContext.Provider value={values}>{children}</TelegramContext.Provider>
  );
};

export { TelegramContext, TelegramProvider };
