export interface StoreState {
  balance: string;
  loading: boolean;
  address: string;
}

export interface StoreActions {
  getBalance: () => void;
}
