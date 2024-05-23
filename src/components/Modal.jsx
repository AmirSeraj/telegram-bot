import React from "react";
import { Close } from "./Icons";
import clsx from "clsx";
import Loading from "./LoadingComponent/Loading";

const Modal = ({ setOpenModal, openModal, loading, task, taskInfo, children }) => {
  taskInfo = {
    title: "Connect Solana wallet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.",
    number: 200000,  
  };
  return (
    <div
      className={`${
        openModal && (task ? "translate-y-0" : "translate-y-20")
      } transition-all ease-linear duration-700 fixed w-full h-full bg-gray-800/95 right-0 top-0 z-[999] flex flex-col p-5 shadow-lg drop-shadow-lg`}
      //   className={clsx(
      //     openModal ? "translate-y-0" : "translate-y-[100vh]",
      //     "transition-all duration-700 w-full h-full absolute bg-gray-800/95 right-0 top-0 z-[999] flex flex-col p-5"
      //   )}
    >
      <div className="flex justify-end items-center">
        <Close
          color={"#f0f0f0"}
          size={24}
          onClick={() => setOpenModal(false)}
        />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {task ? (
            <div className="flex flex-col gap-2">
              <h1 className="capitalize text-2xl">{taskInfo.title}</h1>
              <p className="text-slate-400">{taskInfo.description}</p>
              <div className="my-2 bg-slate-900 py-2 px-3 rounded-md flex gap-3 items-center">
                <img className="w-[40px] h-[40px]" src="/images/coin-icon.png" alt="coin" />
                <div className="flex flex-col gap-1 items-center">
                    <span className="text-white">Reward</span>
                    <span>{Number(taskInfo.number).toLocaleString()}</span>
                </div>
              </div>
              <h1 className="text-xl text-white">Your Tasks</h1>
              {children}
            </div>
          ) : (
            <div>boost info</div>
          )}
        </>
      )}
    </div>
  );
};

export default Modal;
