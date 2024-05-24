import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import FooterContainer from "./components/Footer/FooterContainer";
// import { BackGroundColor } from "./config/colors";
import RefPage from "./pages/RefPage";
import TaskPage from "./pages/TaskPage";
import TapPage from "./pages/TapPage";
import BoostPage from "./pages/BoostPage";
import StatsPage from "./pages/StatsPage";
import { TelegramProvider } from "./context/TelegramContext";

function App() {
  // const tele = window.Telegram.WebApp;
  // const tele = Telegram.WebApp.initData

  // useEffect(() => {
  //   tele.ready();
  // }, []);

  // const search = tele.initData;
  // const converted = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });

  // console.log("use", JSON.parse(converted.user));

  return (
    <div className="app">
      {/* userdata:{user} */}
      <TelegramProvider>
        <Routes>
          <Route path="/ref" exact element={<RefPage />} />
          <Route path="/task" exact element={<TaskPage />} />
          <Route path="/" element={<Navigate to="/tap" replace />} />
          <Route path="/tap" exact element={<TapPage />} />
          <Route path="/boost" exact element={<BoostPage />} />
          <Route path="/stats" exact element={<StatsPage />} />
        </Routes>
      </TelegramProvider>
    </div>
  );
}

export default App;
