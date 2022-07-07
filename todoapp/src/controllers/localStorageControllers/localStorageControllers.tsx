import { Todo } from "../../interfaces/interfaces"

export const createStorage = ():void => {
    //Function createStorage takes no input and create an empty array in local storage
    localStorage.setItem("todoListData", JSON.stringify([]))
}

export const setItemInStorage = (todoData: Todo[]) => {
    //Function setItemInStorage takes a list of Todo array as an input and set it in storage
    localStorage.setItem("todoListData", JSON.stringify(todoData))
}

export const getItemInStorage = ():Todo[] => {
    //Function getItemInStorage takes no input and return the values stored in storage as an array of Todo inteface
    return JSON.parse(localStorage.getItem("todoListData") as string);
}