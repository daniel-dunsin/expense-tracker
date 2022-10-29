import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { IInput, ITransaction } from "../interfaces/types";
import ExpenseList from "./expenseList";
import Input from "./input";

const inputValues: IInput[] = [
  {
    type: "text",
    title: "Text",
    placeholder: "Enter text",
    name: "text",
  },
  {
    type: "number",
    title: "Amount",
    subtitle: "[negative - expense, positive - income]",
    placeholder: "Enter text",
    name: "amount",
  },
];

const MainContainer = () => {
  const {
    income,
    expense,
    newTransaction,
    addTransactions,
    getTotals,
    transactions,
  } = useGlobalContext();

  useEffect(() => {
    getTotals();
  }, [transactions]);

  return (
    <main className="w-[100vw] px-2 md:max-w-[400px] md:px-0 mx-auto min-h-screen py-8">
      <h2 className="font-bold text-center text-xl">Expense Tracker</h2>

      {/* balance */}
      <section className="w-full flex flex-col mt-4">
        <p className="text-lg font-bold">YOUR BALANCE</p>
        <h1 className="text-2xl font-bold">${income + expense}</h1>
      </section>

      {/* income and expense containers */}
      <section className="w-full flex justify-between py-[20px] items-center bg-white shadow-md my-4 rounded-[2px]">
        <div className="px-[15px] text-center flex flex-col justify-center items-center gap-y-2 font-bold flex-1 border-r-2">
          <h2>INCOME</h2>
          <h1 className="text-green-600">${income}</h1>
        </div>
        <div className="px-[15px] text-center flex flex-col justify-center items-center gap-y-2 font-bold flex-1">
          <h2>EXPENSE</h2>
          <h1 className="text-red-600">${expense}</h1>
        </div>
      </section>

      {/* history */}
      <section className="mt-6 mb-7">
        <h1 className="w-full pb-1 font-bold text-lg border-b-4 border-b-[lightgray]">
          History
        </h1>
        <ExpenseList />
      </section>
      {/* add new transaction */}
      <section>
        <h1 className="w-full pb-1 font-bold text-lg border-b-4 border-b-[lightgray]">
          Add new transaction
        </h1>
        <div className="flex flex-col gap-y-4 mt-4">
          {inputValues.map((inputVal: IInput, index: number) => {
            return (
              <Input
                key={index}
                {...inputVal}
                value={newTransaction[inputVal.name as keyof ITransaction]}
              />
            );
          })}
        </div>
        <button
          className="px-2 py-3 rounded-md text-white bg-purple-500 outline-none w-full block mt-4"
          onClick={addTransactions}
        >
          Add Transaction
        </button>
      </section>
    </main>
  );
};

export default MainContainer;
