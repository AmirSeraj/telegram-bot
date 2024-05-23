import React from "react";
import "./Boosters.css";
import Card from "../Card";
import { BatteryIcon, FlashIcon, Hand, Robot } from "../Icons";

const Boosters = () => {
  return (
    <div>
      <h1 className="text-white text-2xl my-2">Boosters:</h1>
      <div className="container--task">
        <Card
          icon={<Hand color={"yellow"} size={28} />}
          name={"Multitap"}
          coin_num={100000}
          level={10}
        />
        <Card
          icon={<BatteryIcon color={"yellow"} size={28} />}
          name={"Energy Limit"}
          coin_num={25000}
          level={8}
        />
        <Card
          icon={<FlashIcon color={"yellow"} size={28} />}
          name={"Recharging Speed"}
          coin_num={100000}
          level={3}
        />
        <Card
          icon={<Robot color={"yellow"} size={28} />}
          name={"Tap Bot"}
          coin_num={200000}
        />
      </div>
    </div>
  );
};

export default Boosters;
