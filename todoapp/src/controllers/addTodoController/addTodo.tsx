import { setItemInStorage } from "../localStorageControllers/localStorageControllers";
import { Todo } from "../../interfaces/interfaces";

export const addTodo = (todoInput: string, todoList:Todo[] ): Todo[] => {
    const newTodo: Todo = {
        id: todoList.length+1,
        todo: todoInput,
        status: false
      }
      console.log(newTodo);
      todoList.push(newTodo);
      setItemInStorage(todoList);
      return todoList;
}