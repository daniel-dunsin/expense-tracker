import React, { ReactElement } from "react";
import { useGlobalContext } from "../context";
import { ITransaction } from "../interfaces/types";
import ExpenseItem from "./expenseItem";

const ExpenseList = () => {
  const { transactions } = useGlobalContext();
  return (
    <div className="w-full flex flex-col gap-y-2 mt-5">
      {transactions.map(
        (transaction: ITransaction, index: number): ReactElement => {
          return <ExpenseItem key={index} {...transaction} />;
        }
      )}
    </div>
  );
};

export default ExpenseList;
