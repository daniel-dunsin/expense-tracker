import { createContext, useContext, useState } from "react";
import { IAppContext, IAppProvider, ITransaction } from "./interfaces/types";

const AppContext = createContext({} as IAppContext);

export const AppProvider = ({ children }: IAppProvider) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([
    {
      id: 1,
      text: "Daniel's Food",
      amount: "402.5",
    },
    {
      id: 2,
      text: "Emma's School fees",
      amount: "-200.78",
    },
  ]);
  const [income, setIncome] = useState<number>(500.0);
  const [expense, setExpense] = useState<number>(240.0);
  const [newTransaction, setNewTransaction] = useState<ITransaction>({
    text: "",
    amount: "",
  });
  const updateTransaction = (name: string, value: string) => {
    setNewTransaction({
      ...newTransaction,
      [name as keyof ITransaction]: value,
    });
  };

  const addTransactions = () => {
    const { text, amount } = newTransaction;
    if (!text || !amount) return;
    setTransactions([
      ...transactions,
      { text, amount, id: new Date().getTime() },
    ]);
    setNewTransaction({ text: "", amount: "" });
  };

  const getTotals = () => {
    const totals = { income: 0, expenses: 0 };
    transactions.forEach((transaction) => {
      if (transaction.amount.includes("-")) {
        totals.expenses = totals.expenses + parseFloat(transaction.amount);
      } else {
        totals.income = totals.income + parseFloat(transaction.amount);
      }
    });
    setIncome(totals.income);
    setExpense(totals.expenses);
  };

  const deleteTransaction = (id: number | undefined) => {
    setTransactions((prev) =>
      prev.filter((transaction) => {
        if (transaction.id !== id) {
          return transaction;
        }
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        income,
        expense,
        updateTransaction,
        transactions,
        newTransaction,
        addTransactions,
        getTotals,
        deleteTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IAppContext => useContext(AppContext);
