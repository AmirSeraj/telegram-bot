import { createContext, useEffect, useState } from "react";

const TelegramContext = createContext({});

const TelegramProvider = ({ children }) => {
  const [TeleAccountInfo, setTeleAccountInfo] = useState(null);
  const [userId, setUserId] = useState(null);

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
    const userId = TeleAccountInfo.user.id;
    setUserId(userId);
  }, []);

  return (
    <TelegramContext.Provider value={userId}>
      {children}
    </TelegramContext.Provider>
  );
};

export { TelegramContext, TelegramProvider };
