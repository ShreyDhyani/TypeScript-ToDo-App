import React, { memo } from "react";
import { Todo } from "../../interfaces/interfaces";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { theme } from "../theme/theme";

interface Props {
  todo: Todo;
  callback: (todoIndex: number) => void;
}

const TodoListElement: React.FC<Props> = ({ ...props }) => {
  const currentColor = useSelector((state: RootState) => state.color.color);
  const currentTheme = theme[currentColor as "yellow"];

  const handleChange = () => {
    props.callback(props.todo.id);
  };

  return (
    <div
      id={props.todo.id.toString()}
      key={props.todo.id.toString() + props.todo.todo}
      className="Todo w-8/12 p-1 pl-3 border-2 rounded-lg text-left my-1 flex"
      style={{
        borderColor: currentTheme.border,
        backgroundColor: currentTheme.note,
      }}
    >
      <div
        className={
          "flex-1 flex-wrap overflow-hidden overflow-ellipsis" +
          (props.todo.status ? " line-through" : "")
        }
        style={{ color: currentTheme.border }}
      >
        {props.todo.todo}
      </div>
      <input
        className="float-right mr-3 m-1"
        type="checkbox"
        style={{ accentColor: currentTheme.fill }}
        checked={props.todo.status}
        onChange={(e) => handleChange()}
      ></input>
    </div>
  );
};

export default memo(TodoListElement);
