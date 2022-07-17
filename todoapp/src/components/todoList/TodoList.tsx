import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../../interfaces/interfaces";
import TodoListElement from "../todoListElement/TodoListElement";
import type { RootState } from "../../redux/store";
import { theme } from "../theme/theme";

interface Props {
  todoList: Todo[];
  callback: (todoIndex: number) => void;
}

const TodoList: React.FC<Props> = ({ ...props }) => {
  const currentColor = useSelector((state: RootState) => state.color.color);
  const currentTheme = theme[currentColor as "yellow"];

  return (
    <div
      className="TodoList h-fit border-2 rounded-md mx-3 mb-5 pb-3 text-center"
      style={{
        backgroundColor: currentTheme.fill,
        borderColor: currentTheme.border,
      }}
    >
      <label
        className="TodoListTitle font-bold text-3xl px-28 border-b-2"
        style={{ borderColor: currentTheme.border, color: currentTheme.border }}
      >
        {"To-Do List"}
      </label>
      <div className="TodoElements mt-3 flex flex-col justify-center items-center">
        {props.todoList.map((todo) => {
          return (
            <TodoListElement
              key={todo.id}
              todo={todo}
              callback={props.callback}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
