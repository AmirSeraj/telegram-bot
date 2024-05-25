import React, { useEffect, useState } from "react";
import "./Boosters.css";
import Card from "../Card";
import { BatteryIcon, FlashIcon, Hand, Robot } from "../Icons";
import { useTelegram } from "../../hooks/useTelegram";
import CardLoading from "../CardLoading";
import Modal from "../Modal";

/**PATH */
const path_multitap = process.env.REACT_APP_URL + "api/landing/info-t_balance";
const path_energy_limit = process.env.REACT_APP_URL + "api/level-up/energy";
const path_recharging = process.env.REACT_APP_URL + "api/level-up/recharging";
const path_bot = process.env.REACT_APP_URL + "api/level-up/robot";
/**PATH */

const Boosters = ({ tokenBalance }) => {
  const [multiTap, setMultiTap] = useState([]);
  const [energyLimit, setEnergyLimit] = useState([]);
  const [recharging, setRecharging] = useState([]);
  const [bot, setBot] = useState([]);

  const [loading_two, setLoading_two] = useState(false);
  const [loading_three, setLoading_three] = useState(false);
  const [loading_four, setLoading_four] = useState(false);
  const [loading_five, setLoading_five] = useState(false);
  const user = useTelegram();

  /**open Modal */
  const [openMulti, setOpenMulti] = useState(false);
  const [openEnergy, setOpenEnergy] = useState(false);
  const [openRecharging, setOpenRecharging] = useState(false);
  const [openBot, setOpenBot] = useState(false);

  /**2.get Multi tap */
  // const getMultiTap = async () => {
  //   setLoading_two(true);
  //   if (user?.uuid_name) {
  //     try {
  //       const response = await fetch(path_multitap, {
  //         method: "GET",
  //         headers: {
  //           "Content-type": "application/json",
  //           Accept: "application/json",
  //           "info-user": user.uuid_name,
  //         },
  //       });
  //       const result = await response.json();
  //       console.log("multitap", result);
  //       setMultiTap(result); ////balanceRef
  //       setLoading_two(false);
  //     } catch (error) {
  //       setLoading_two(false);
  //       console.log("error2", error);
  //     }
  //   }
  // };

  /**3.get Energy limit */
  const getEnergyLimit = async () => {
    setLoading_three(true);
    if (user?.uuid_name) {
      try {
        const response = await fetch(path_energy_limit, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user.uuid_name,
          },
        });
        const result = await response.json();
        console.log("energy_limit", result);
        setEnergyLimit(result); ////balanceRef
        setLoading_three(false);
      } catch (error) {
        setLoading_three(false);
        console.log("error2", error);
      }
    }
  };

  /**4.get recharging */
  const getRecharging = async () => {
    setLoading_four(true);
    if (user?.uuid_name) {
      try {
        const response = await fetch(path_recharging, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user.uuid_name,
          },
        });
        const result = await response.json();
        console.log("recharging", result);
        setRecharging(result); ////balanceRef
        setLoading_four(false);
      } catch (error) {
        setLoading_four(false);
        console.log("error2", error);
      }
    }
  };

  /**4.get bot */
  const getBot = async () => {
    setLoading_five(true);
    if (user?.uuid_name) {
      try {
        const response = await fetch(path_bot, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            "info-user": user.uuid_name,
          },
        });
        const result = await response.json();
        console.log("bot", result);
        setBot(result); ////balanceRef
        setLoading_five(false);
      } catch (error) {
        setLoading_five(false);
        console.log("error2", error);
      }
    }
  };

  useEffect(() => {
    // getMultiTap();
    getEnergyLimit();
    getRecharging();
    getBot();
  }, []);

  return (
    <>
      <h1 className="text-white text-2xl my-2">Boosters:</h1>
      <div className="container--task">
        {loading_two ? (
          <CardLoading />
        ) : (
          <Card
            icon={<Hand color={"yellow"} size={28} />}
            // name={multiTap?.title}
            name={"Multitap"}
            coin_num={multiTap?.amount}
            level={multiTap?.title}
            onClick={() => setOpenMulti(true)}
          />
        )}
        {loading_three ? (
          <CardLoading />
        ) : (
          <Card
            icon={<BatteryIcon color={"yellow"} size={28} />}
            // name={energyLimit?.title}
            name={"Energy Limit"}
            coin_num={energyLimit?.amount}
            level={energyLimit?.title}
            onClick={() => setOpenEnergy(true)}
          />
        )}

        {loading_four ? (
          <CardLoading />
        ) : (
          <Card
            icon={<FlashIcon color={"yellow"} size={28} />}
            // name={recharging?.title}
            name={"Recharging Speed"}
            coin_num={recharging?.amount}
            level={recharging?.title}
            onClick={() => setOpenRecharging(true)}
          />
        )}
        {loading_five ? (
          <CardLoading />
        ) : (
          <Card
            icon={<Robot color={"yellow"} size={28} />}
            // name={bot?.title}
            name={"Tap Bot"}
            coin_num={bot?.amount}
            onClick={() => setOpenBot(true)}
          />
        )}
      </div>
      {/* Modals */}
      {openMulti && (
        <Modal
          setOpenModal={setOpenMulti}
          openModal={openMulti}
          loading={loading_two}
          icon={<Hand color={"yellow"} size={58} />}
          boostTitle={'Recharging Speed'}
          boostDescription={'Increase amount of TAP you can earn per one tap.'}
          boostTapInfo={'+1 per tap for each level.'}
          boostTokenRequired={multiTap?.amount}
          boostlevel={multiTap?.level}
          balance={tokenBalance}
        ></Modal>
      )}
    </>
  );
};

export default Boosters;
