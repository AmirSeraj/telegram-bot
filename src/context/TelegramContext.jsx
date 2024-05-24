import { createContext, useEffect, useState } from "react";

const TelegramContext = createContext({});

const TelegramProvider = ({ children }) => {
  const [teleAccountInfo, setTeleAccountInfo] = useState(null);
  // const [userId, setUserId] = useState(null);

  useEffect(() => {
    const tele = window.Telegram.WebApp;
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

  // const value = {
  //   userId: JSON.parse(teleAccountInfo.user).id,
  //   username: JSON.parse(teleAccountInfo.user).username,
  // };

  return (
    <TelegramContext.Provider value={teleAccountInfo}>
      {children}
    </TelegramContext.Provider>
  );
};

export { TelegramContext, TelegramProvider };
