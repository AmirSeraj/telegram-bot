import { useEffect, useReducer, useRef, useState } from "react";
import CoinIcon from "../../components/Tap/CoinIcon";
import ScoreBar from "../../components/Tap/ScoreBar";
import bgImg from "../../assets/bg_images/bg-2.png";
import RootLayout from "../../components/Layout";
import Balance from "../../components/Balance";

const Home = () => {
  const balanceRef = useRef({ value: 0 });
  const initialSparkRef = useRef({ value: 0 });
  const [currentSpark, setCurrentSpark] = useState(
    initialSparkRef.current.value
  );

  const increment = +3; ///this will be changed when change sth, in another words, this will be read from database
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
    <RootLayout
      bg_img={bgImg}
      // bg_radial={
      //   "radial-gradient(ellipse at 0% 40%, rgb(224, 224, 65) -7%, transparent 40%)"
      // }
    >
      <div className="flex flex-col items-center justify-around w-full h-full">
        <Balance balance={balanceRef.current.value} cup={true} />
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
    </RootLayout>
  );
};

export default Home;
