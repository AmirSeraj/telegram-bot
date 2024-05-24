import { createContext, useEffect, useState } from "react";

const TelegramContext = createContext({});

const TelegramProvider = ({ children }) => {
  const [teleAccountInfo, setTeleAccountInfo] = useState(null);
  const [user, setUser] = useState([]);

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

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <TelegramContext.Provider value={user}>{children}</TelegramContext.Provider>
  );
};

export { TelegramContext, TelegramProvider };
