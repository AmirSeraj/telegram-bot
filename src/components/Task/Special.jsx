import React, { useRef, useState } from "react";
import Card from "../Card";
import { TaskIcon } from "../Icons";
import Modal from "../Modal";
import CustomBtn from "../CustomBtn";
import CardLoading from "../CardLoading";

const Special = ({ loadingCards, specials }) => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const taskInfoRef = useRef(null);

  const handleGetTaskDetails = async (id) => {
    setLoading(true);
    setOpenModal(true);
    try {
      const response = await fetch("fetch_address_get_task_info", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      });
      const taskInfo = await response.json();
      taskInfoRef.current = taskInfo;
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error2", error);
    }
  };

  return (
    <>
      {loadingCards ? (
        <>
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </>
      ) : (
        <>
          <Card
            // onClick={() => handleGetTaskDetails(1)}
            icon={<TaskIcon />}
            name={"Join Our Socials"}
            coin_num={200000}
          />
          <Card
            icon={<TaskIcon />}
            name={"Connect Solana Wallet"}
            coin_num={100000}
          />
          <Card
            icon={<TaskIcon />}
            name={"Never Miss Key Insight!"}
            coin_num={300000}
          />
          <Card
            icon={<TaskIcon />}
            name={"Never Miss Key Insight!"}
            coin_num={300000}
          />
        </>
      )}
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          loading={loading}
          task={true}
          taskInfo={taskInfoRef.current}
        >
          <div className="p-3 rounded-md flex justify-between bg-slate-900 items-center">
            <span className="text-white">Solana Wallet</span>
            <CustomBtn title={"Check"} className={"text-base"} />
          </div>
          <CustomBtn
            title={"Finish mission"}
            onClick={() => setOpenModal(false)}
            disabled={true}
            className={"text-lg py-4 mt-3"}
          />
        </Modal>
      )}
    </>
  );
};

export default Special;
