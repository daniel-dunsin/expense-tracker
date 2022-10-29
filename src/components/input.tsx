import React, { ChangeEvent } from "react";
import { useGlobalContext } from "../context";
import { IInput } from "../interfaces/types";

const Input = ({ title, subtitle, placeholder, value, name, type }: IInput) => {
  const { updateTransaction } = useGlobalContext();
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-base font-bold capitalize">
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          updateTransaction(name, event.target.value);
        }}
        className="w-full border-2 border-[lightgray] outline-none px-2 py-3"
      />
    </div>
  );
};

export default Input;
