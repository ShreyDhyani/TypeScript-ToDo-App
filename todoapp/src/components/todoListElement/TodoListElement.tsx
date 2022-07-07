import React, { memo } from "react";
import { Todo } from "../../interfaces/interfaces";

interface Props {
  todo: Todo;
  callback: (todoIndex: number) => void;
}

const TodoListElement: React.FC<Props> = ({ ...props }) => {

  const handleChange = () => {
    props.callback(props.todo.id);
  };

  return (
    <div
      id={props.todo.id.toString()}
      key={props.todo.id.toString() + props.todo.todo}
      className="Todo w-8/12 bg-yellow-100 p-1 pl-3 border-yellow-600 border-2 rounded-lg text-left my-1 flex hover:h-fit"
    >
      <div
        className={
          "flex-1 flex-wrap overflow-hidden overflow-ellipsis" +
          (props.todo.status ? " line-through" : "")
        }
      >
        {props.todo.todo}
      </div>
      <input
        className="float-right mr-3 m-1"
        type="checkbox"
        checked={props.todo.status}
        onChange={(e) => handleChange()}
      ></input>
    </div>
  );
};

export default memo(TodoListElement);
