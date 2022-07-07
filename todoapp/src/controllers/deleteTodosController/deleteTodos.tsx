import { Todo } from "../../interfaces/interfaces";
import { setItemInStorage } from "../localStorageControllers/localStorageControllers";

const filterTodos = (list: Todo[]): Todo[] => {
  const remappedList: Todo[] = list.map((listElement: Todo, index: number) => {
    return { ...listElement, id: index+1 };
  });
  return remappedList;
};

export const deleteTodos = (todoList: Todo[]): Todo[] => {
  let newTodoList: Todo[] = todoList.filter((todo) => {
    return todo.status === false;
  });
  newTodoList = filterTodos(newTodoList);
  setItemInStorage(newTodoList);
  return newTodoList;
};
