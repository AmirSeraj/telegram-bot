import { useEffect } from "react";
import clsx from "clsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FooterContainer from "./components/Footer/FooterContainer";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();
  }, []);

  return (
    <div
      className={clsx("app", "bg-gradient-to-tr from-[#140634] to-[#57285e]")}
    >
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
      <FooterContainer />
    </div>
  );
}

export default App;
