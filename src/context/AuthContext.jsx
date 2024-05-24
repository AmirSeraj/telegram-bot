import { createContext, useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const telegram = useTelegram();
  useEffect(() => {
    const telegramInfo = JSON.parse(telegram.user);
    const userId = telegramInfo.id;
    console.log('amirseraj', userId);
  }, [telegram]);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
