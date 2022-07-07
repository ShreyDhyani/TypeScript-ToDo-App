import { Todo } from "../../interfaces/interfaces";
import { setItemInStorage } from "../localStorageControllers/localStorageControllers";

export const checkTodo = (todoId: number, todoList: Todo[]): Todo[] => {
  const newList: Todo[] = todoList.map((todo) => {
    return todoId === todo.id ? { ...todo, status: !todo.status } : { ...todo };
  });
  setItemInStorage(newList);
  return newList;
};
