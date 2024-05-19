import { useState } from "react";
import "./styles.css";
import CoinNum from "../../components/Tap/CoinNum";
import CoinIcon from "../../components/Tap/CoinIcon";
import ScoreBar from "../../components/Tap/ScoreBar";

const Home = () => {
  const [coinNum, setCoinNum] = useState(0);
  return (
    <div className={"w-full h-full text-white relative"}>
      <div className="container" />
      <div className="w-full h-full flex flex-col items-center px-3 py-7">
        <CoinNum totalCoin={1411} />
        <CoinIcon coinNum={coinNum} setCoinNum={setCoinNum} />
        <ScoreBar coinNum={coinNum} />
      </div>
    </div>
  );
};

export default Home;
