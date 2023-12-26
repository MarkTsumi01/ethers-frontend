import { create } from "zustand";
import { ethers, formatEther } from "ethers";
import { StoreState, StoreActions } from "../interface/Store"

export const useWallet = create<StoreState & StoreActions>((set) => ({
  balance: '0',
  address: '0',
  loading: false,
  getBalance: async () => {
    let signer = null;
    let provider;
    let balance;
    let format;
    let address = "0xb0462b3D1157cdF2b2ce8c31aD91f5B28Fb947e4";

    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      balance = await provider.getBalance(address);
      console.log(balance, "Balance");
      console.log(window.ethereum, 'window');
      

      format = formatEther(balance);
      console.log(format, "Balance Format");
      console.log(address, "Address");
    }
    set({ loading: true });
    set({ balance: format });
    set({ address: address });
  },
}));

