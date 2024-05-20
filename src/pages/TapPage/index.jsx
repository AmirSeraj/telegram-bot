import { useEffect, useReducer, useRef, useState } from "react";
import "./styles.css";
import CoinNum from "../../components/Tap/CoinNum";
import CoinIcon from "../../components/Tap/CoinIcon";
import ScoreBar from "../../components/Tap/ScoreBar";

const Home = () => {
  const balanceRef = useRef({ value: 0 });
  const initialSparkRef = useRef({ value: 0 });
  const [currentSpark, setCurrentSpark] = useState(
    initialSparkRef.current.value
  );

  const increment = +3;
  const forceUpdate = useReducer((x) => x + 1, 0)[1];

  // assume /**later these two numbers should be read from database */
  const maxLimitSpark = 50; /**max limit */
  const incrementSparkNumber = 3; /**with what number it should be added, 1, 2, ... */

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("Attempting to invoke autoClicker components.");
      balanceRef.current.value =
        Math.round(balanceRef.current.value * 100) / 100;
      forceUpdate();
    }, 100);

    return () => clearInterval(interval);
  });

  const handleCoinClick = () => {
    setCurrentSpark((prevSpark) =>
      Math.max(prevSpark - incrementSparkNumber, 0)
    );
  };

  return (
    <div className={"w-full h-full text-white relative"}>
      <div className="container" />
      <div className="w-full h-full flex flex-col items-center px-3 py-7">
        <CoinNum balance={balanceRef.current.value} />
        <CoinIcon
          balanceRef={balanceRef}
          increment={increment}
          onCoinClick={handleCoinClick}
          currentSpark={currentSpark}
        />
        <ScoreBar
          maxLimitSpark={maxLimitSpark}
          incrementSparkNumber={incrementSparkNumber}
          currentSpark={currentSpark}
          setCurrentSpark={setCurrentSpark}
        />
      </div>
    </div>
  );
};

export default Home;
