import {
  ADD_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
} from "../ActionsTypes/actionsTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const editTodo = (payload) => {
  return { type: EDIT_TODO, payload };
};
export const completeTodo = (payload) => {
  return { type: COMPLETE_TODO, payload };
};
