import React from "react";
import { Todo } from "../../interfaces/interfaces";
import TodoListElement from "../todoListElement/TodoListElement";

interface Props {
  todoList: Todo[];
  callback: (todoIndex: number) => void,
}

const TodoList: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="TodoList h-fit border-2 border-yellow-700 rounded-md bg-yellow-200 mx-3 mb-2 text-center">
      <label className="TodoListTitle font-bold text-3xl px-28 text-yellow-800 border-b-2 border-yellow-700">
        {"To-Do List"}
      </label>
      <div className="TodoElements mt-3 flex flex-col justify-center items-center">
        {props.todoList.map((todo)=>{return <TodoListElement key={todo.id} todo={todo} callback={props.callback}/>})}
      </div>
    </div>
  );
};

export default TodoList;
