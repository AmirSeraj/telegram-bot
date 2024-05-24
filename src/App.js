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
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <TelegramProvider>
        <AuthProvider>
          <Routes>
            <Route path="/ref" exact element={<RefPage />} />
            <Route path="/task" exact element={<TaskPage />} />
            <Route path="/" element={<Navigate to="/tap" replace />} />
            <Route path="/tap" exact element={<TapPage />} />
            <Route path="/boost" exact element={<BoostPage />} />
            <Route path="/stats" exact element={<StatsPage />} />
          </Routes>
        </AuthProvider>
      </TelegramProvider>
    </div>
  );
}

export default App;
