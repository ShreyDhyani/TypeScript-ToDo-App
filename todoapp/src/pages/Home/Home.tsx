import React, { useEffect, useState } from "react";
import Inputter from "../../components/inputter/Inputter";
import {
  getItemInStorage,
  createStorage,
} from "../../controllers/localStorageControllers/localStorageControllers";
import { Todo } from "../../interfaces/interfaces";
import { addTodo } from "../../controllers/addTodoController/addTodo";
import TodoList from "../../components/todoList/TodoList";
import { checkTodo } from "../../controllers/checkTodoController/checkTodo";
import { deleteTodos } from "../../controllers/deleteTodosController/deleteTodos";

const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleTodoNewTodoAdd = (todoInput: string): void => {
    setTodoList([...addTodo(todoInput, todoList)]);
  };

  const handleTodoTaskStatusChange = (todoIndex: number): void => {
    setTodoList([...checkTodo(todoIndex, todoList)]);
  };

  const handleDeletingTodos = () => {
    setTodoList([...deleteTodos(todoList)]);
  };

  useEffect(() => {
    if (!getItemInStorage()) {
      createStorage();
    }
    setTodoList(getItemInStorage());
  }, []);

  return (
    <div className="Home flex flex-col h-screen">
      <Inputter callback={handleTodoNewTodoAdd} />
      <TodoList todoList={todoList} callback={handleTodoTaskStatusChange} />
      <div className="flex">
        <button
          className="DeleteTodosButton bg-red-500 border-red-700 border-2 rounded-lg p-2 mx-auto text-white font-bold "
          onClick={(e) => {
            handleDeletingTodos();
          }}
        >
          {"Delete Completed To-Dos"}
        </button>
        <button className="p-2 my-2 mr-2 rounded-full bg-yellow-500 h-5 w-5 float-right">{' '}</button>
      </div>
    </div>
  );
};

export default Home;
