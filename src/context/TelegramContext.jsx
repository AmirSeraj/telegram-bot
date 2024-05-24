import { createContext, useEffect, useState } from "react";

const TelegramContext = createContext({});

const TelegramProvider = ({ children }) => {
  const [TeleAccountInfo, setTeleAccountInfo] = useState(null);

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

  return (
    <TelegramContext.Provider value={TeleAccountInfo}>
      {children}
    </TelegramContext.Provider>
  );
};

export { TelegramContext, TelegramProvider };
