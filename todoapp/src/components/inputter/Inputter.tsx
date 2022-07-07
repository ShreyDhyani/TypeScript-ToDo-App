import React, { useState } from "react";

interface Props {
  callback: (todoInput: string) => void;
}

const Inputter: React.FC<Props> = ({ ...props }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <div className="Inputter m-2 p-2 border-2 border-yellow-600 rounded-xl bg-yellow-200">
      <input
        className="w-9/12 mr-2 h-8  bg-inherit outline-none"
        type="text"
        placeholder="Input To-Do"
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        className="bg-yellow-400 text-yellow-700 font-bold p-1 px-7 mr-2 border-yellow-700 border-2 rounded-lg float-right"
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
