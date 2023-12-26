"use client";
import { useWallet } from "../store/Wallet";

export function Connectwallet() {
  const { getBalance } = useWallet(); 

  return (
    <>
      <button
        onClick={getBalance}
        className="hover:bg-orange-600 bg-orange-200 p-4 rounded text-white font-bold"
      >
        Connect Wallet
      </button>
    </>
  );
}
