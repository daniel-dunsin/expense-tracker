import { ReactElement } from "react";

export type IAppContext = {
  income: number;
  expense: number;
  transactions: ITransaction[];
  newTransaction: ITransaction;
  updateTransaction: (name: string, value: string) => void;
  addTransactions: () => void;
  getTotals: () => void;
  deleteTransaction: (id: number | undefined) => void;
};

export type IAppProvider = {
  children: ReactElement;
};

export type ITransaction = {
  id?: number;
  text: string;
  amount: string;
};

export type IInput = {
  title: string;
  subtitle?: string;
  placeholder: string;
  name: string;
  value?: string | number;
  type: string;
};
