import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface Props {
  callback: (todoInput: string) => void;
}

const Inputter: React.FC<Props> = ({ ...props }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const currentColor = useSelector((state: RootState) => state.color.color);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={
        "Inputter sticky top-2 z-20 m-2 p-2 border-2 rounded-xl" +
        ` border-yellow-700` +
        ` bg-yellow-300`
      }
    >
      <input
        className="w-9/12 mr-2 h-8 bg-inherit outline-none"
        type="text"
        placeholder="Input To-Do"
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        className={
          "font-bold p-1 px-7 mr-2 border-2 rounded-lg float-right" +
          ` bg-yellow-400` +
          // ` text-${currentColor}-border` +
          ` border-yellow-600`
        }
        onClick={(e) => {
          props.callback(inputValue);
          setInputValue("");
        }}
      >
        {"ADD"}
      </button>
    </div>
  );
};

export default Inputter;
