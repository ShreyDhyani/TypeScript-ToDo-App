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
import Popup from "../../components/popup/Popup";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { theme } from "../../components/theme/theme";

const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [showPicker, setShowPicker] = useState<boolean>(true);
  const currentColor: string = useSelector(
    (state: RootState) => state.color.color
  );
  const currentTheme = theme[currentColor as "yellow"];

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
    <div className="Home flex flex-col h-screen relative">
      <Inputter callback={handleTodoNewTodoAdd} />
      <TodoList todoList={todoList} callback={handleTodoTaskStatusChange} />
      <div className="flex sticky bottom-2 right-2  ">
        <button
          className="DeleteTodosButton bg-red-500 border-red-700 border-2 rounded-lg p-2 mx-auto text-white font-bold "
          onClick={(e) => {
            handleDeletingTodos();
          }}
        >
          {"Delete Completed To-Dos"}
        </button>
        <Popup isHidden={showPicker} />
        <button
          className={
            "p-2 item-center border-4 justify-center mr-2 rounded-full h-8 w-8 m-2 float-right relative"
          }
          style={{
            backgroundColor: currentTheme.fill,
            borderColor: currentTheme.border,
          }}
          onClick={(e) => {
            e.preventDefault();
            console.log("Current Color is: ", currentColor);
            setShowPicker(!showPicker);
          }}
        >
          {""}
        </button>
        {/* <TestComponent /> */}
      </div>
    </div>
  );
};

export default Home;
