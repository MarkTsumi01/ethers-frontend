"use client";
import { useWallet } from "../store/Wallet";
import { useTheme } from "next-themes";

export function Connectwallet() {
  const { getBalance } = useWallet();
  const { theme, setTheme } = useTheme();

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
