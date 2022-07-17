import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setColor } from "../../redux/slice/colorSlice";
import { theme } from "../theme/theme";
interface Props {
  isHidden: boolean;
}

const Popup: React.FC<Props> = ({ ...props }) => {
  const currentColor = useSelector((state: RootState) => state.color.color);
  const currentTheme = theme[currentColor as "yellow"];
  const dispatch = useDispatch();
  const selectorStyle = "h-8 w-8 mr-2 rounded-full hover:border-4";

  return (
    <div
      className={
        "Popup absolute right-2 -top-32 h-36 w-24 z-20 pl-2 pt-2 border-4 bg-white bg-opacity-80 rounded-lg flex flex-wrap justify-center" +
        (props.isHidden ? " hidden" : "")
      }
      style={{ borderColor: currentTheme.border }}
    >
      <div
        className={selectorStyle}
        style={{
          backgroundColor: theme.red.fill,
          borderColor: theme.red.border,
        }}
        onClick={(e) => {
          dispatch(setColor({ color: "red" }));
        }}
      >
        {" "}
      </div>
      <div
        className={selectorStyle}
        style={{
          backgroundColor: theme.blue.fill,
          borderColor: theme.blue.border,
        }}
        onClick={(e) => {
          dispatch(setColor({ color: "blue" }));
        }}
      >
        {" "}
      </div>
      <div
        className={selectorStyle}
        style={{
          backgroundColor: theme.green.fill,
          borderColor: theme.green.border,
        }}
        onClick={(e) => {
          dispatch(setColor({ color: "green" }));
        }}
      >
        {" "}
      </div>
      <div
        className={selectorStyle}
        style={{
          backgroundColor: theme.yellow.fill,
          borderColor: theme.yellow.border,
        }}
        onClick={(e) => {
          dispatch(setColor({ color: "yellow" }));
        }}
      >
        {" "}
      </div>
      <div
        className={selectorStyle}
        style={{
          backgroundColor: theme.indigo.fill,
          borderColor: theme.indigo.border,
        }}
        onClick={(e) => {
          dispatch(setColor({ color: "indigo" }));
        }}
      >
        {" "}
      </div>
      <div
        className={selectorStyle}
        style={{
          backgroundColor: theme.orange.fill,
          borderColor: theme.orange.border,
        }}
        onClick={(e) => {
          dispatch(setColor({ color: "orange" }));
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default Popup;
