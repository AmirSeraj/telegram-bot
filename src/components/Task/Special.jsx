import React, { useRef, useState } from "react";
import Card from "../Card";
import { TaskIcon } from "../Icons";
import Modal from "../Modal";
import CustomBtn from "../CustomBtn";
import CardLoading from "../CardLoading";

const Special = ({ loadingCards, specials }) => {
  const [specialInfo, setSpecialInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleGetTaskDetails = async (index) => {
    setSpecialInfo(specials[index]);
    
    // setLoading(true);
    // setOpenModal(true);
    // try {
    //   const response = await fetch("fetch_address_get_task_info", {
    //     method: "GET",
    //     headers: {
    //       "Content-type": "application/json",
    //       Accept: "application/json",
    //     },
    //   });
    //   const taskInfo = await response.json();
    //   taskInfoRef.current = taskInfo;
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   console.log("error2", error);
    // }
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
          {specials?.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleGetTaskDetails(index)}
              icon={<TaskIcon />}
              name={item?.title}
              coin_num={Number(item?.amount)}
            />
          ))}
        </>
      )}
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          task={true}
          taskInfo={specialInfo}
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
