import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setColor } from "../../redux/slice/colorSlice";

interface Props {
  isHidden: boolean;
}

const Popup: React.FC<Props> = ({ ...props }) => {
  const currentColor = useSelector((state: RootState) => state.color.color);
  const dispatch = useDispatch();

  return (
    <div
      className={
        "Popup absolute -top-16 right-2 h-20 w-32 z-20 p-1 bg-white border-2 bg-opacity-70 rounded-lg flex flex-wrap child" +
        `border-${currentColor}-700` +
        (props.isHidden ? " hidden" : "")
      }
    >
      <div
        className={`h-8 w-8 mr-2 rounded-full bg-color_red-fill hover:border-4 hover:border-color_red-boundary`}
        onClick={(e) => {
          dispatch(setColor({ color: "color_red" }));
        }}
      >
        {" "}
      </div>
      <div
        className={`h-8 w-8 mr-2 rounded-full bg-color_blue-fill hover:border-4 hover:border-color_blue-boundary`}
        onClick={(e) => {
          dispatch(setColor({ color: "color_blue" }));
        }}
      >
        {" "}
      </div>
      <div
        className={`h-8 w-8  rounded-full bg-color_green-fill hover:border-4 hover:border-color_green-boundary`}
        onClick={(e) => {
          dispatch(setColor({ color: "color_green" }));
        }}
      >
        {" "}
      </div>
      <div
        className={`h-8 w-8 mr-2 rounded-full bg-color_yellow-fill hover:border-4 hover:border-color_yellow-boundary`}
        onClick={(e) => {
          dispatch(setColor({ color: "color_yellow" }));
        }}
      >
        {" "}
      </div>
      <div
        className={`h-8 w-8 mr-2 rounded-full bg-color_indigo-fill hover:border-4 hover:border-color_indigo-boundary`}
        onClick={(e) => {
          dispatch(setColor({ color: "color_indigo" }));
        }}
      >
        {" "}
      </div>
      <div
        className={`h-8 w-8 rounded-full bg-color_purple-fill hover:border-4 hover:border-color_purple-boundary`}
        onClick={(e) => {
          dispatch(setColor({ color: "color_purple" }));
        }}
      >
        {" "}
      </div>
    </div>
  );
};

export default Popup;
