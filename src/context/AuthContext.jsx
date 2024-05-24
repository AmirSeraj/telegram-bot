import { createContext, useEffect } from "react";
import { useTelegram } from "../hooks/useTelegram";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const telegram = useTelegram();
  useEffect(() => {
    const userId = JSON.parse(telegram.user).id;
    console.log("userrrr", userId);
  }, [teleAccountInfo]);
};
