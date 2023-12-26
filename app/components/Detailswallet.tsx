"use client";

import React from "react";
import { Connectwallet } from "./Connectwallet";
import { useWallet } from "../store/Wallet";

const Detailswallet = () => {
  const { balance, address, loading } = useWallet();

  return (
    <div className="bg-gray-200 p-16 flex flex-col align-center justify-center rounded-lg gap-4 w-fit">
      {loading ? (
        <>
          <div className="text-center text-xl font-bold">Wallet Details</div>
          <div>
            <div>Balance : {balance}</div>
            <div>Address : {address}</div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <Connectwallet />
          </div>
        </>
      )}
    </div>
  );
};

export default Detailswallet;
