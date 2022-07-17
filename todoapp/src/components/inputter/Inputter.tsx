import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { theme } from "../theme/theme";

interface Props {
  callback: (todoInput: string) => void;
}

const Inputter: React.FC<Props> = ({ ...props }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const currentColor = useSelector((state: RootState) => state.color.color);
  const currentTheme = theme[currentColor as "yellow"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleAdding = (): void => {
    if (inputValue !== "") {
      props.callback(inputValue);
      setInputValue("");
    }
  };

  return (
    <div
      className="Inputter sticky top-2 z-20 m-2 p-2 border-2 rounded-xl"
      style={{
        backgroundColor: currentTheme.fill,
        borderColor: currentTheme.border,
      }}
    >
      <input
        className="w-9/12 mr-2 h-8 pl-2 bg-inherit outline-none placeholder-current"
        style={{ color: currentTheme.border }}
        type="text"
        placeholder="Input To-Do"
        value={inputValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
        className="font-bold p-1 px-7 mr-2 border-2 rounded-lg float-right"
        style={{
          backgroundColor: currentTheme.button,
          borderColor: currentTheme.border,
          color: currentTheme.border,
        }}
        onClick={(e) => {
          handleAdding();
        }}
      >
        {"ADD"}
      </button>
    </div>
  );
};

export default Inputter;
