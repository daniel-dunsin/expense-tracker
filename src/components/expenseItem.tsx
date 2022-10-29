import React from "react";
import { useGlobalContext } from "../context";
import { ITransaction } from "../interfaces/types";

const ExpenseItem = ({ text, amount, id }: ITransaction) => {
  const { deleteTransaction } = useGlobalContext();
  const isExpense: boolean = amount.includes("-");
  return (
    <article className="w-full bg-white shadow-md flex flex-row h-[50px] rounded-md cursor-pointer">
      <div
        className="flex-[0.05] bg-red-700 flex justify-center items-center text-white"
        onClick={() => deleteTransaction(id)}
      >
        X
      </div>
      <div className="flex-1 flex justify-between items-center font-bold px-2">
        <h1>{text}</h1>
        <h1>{isExpense ? amount : `+ ${amount}`}</h1>
      </div>
      <div
        className={`flex-[0.03] ${isExpense ? "bg-red-700" : "bg-green-500"}`}
      ></div>
    </article>
  );
};

export default ExpenseItem;
