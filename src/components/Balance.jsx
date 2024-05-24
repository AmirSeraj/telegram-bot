import clsx from "clsx";
import React from "react";

const Balance = ({ balance, border, cup, description, referral, referral_score, referral_status=false }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-3 p-3",
        border && "border-b-[1px] border-slate-500"
      )}
    >
      {referral_status ? (
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-xl text-white font-bold">{referral} Referrals</p>
          <span className="text-sm text-green-600">+ {referral_score}</span>
        </div>
      ) : (
        <>
          {description && <p className="pb-0 text-sm">{description}</p>}
          <div className="flex gap-2 items-center w-full justify-center">
            <img src="./images/coin-icon.png" alt="coin" />
            {
              balance ? (
                <span className="text-3xl text-white font-bold">{balance}</span>
              ) : (
                <span className="text-3xl text-white font-bold">-</span>
              ) 
            }
          </div>
          {cup && <div>Silver</div>}
        </>
      )}
    </div>
  );
};

export default Balance;
