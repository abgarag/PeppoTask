import { ADD_TODO, TOGGLE_TODO, SORT_TODO } from "./actions.types";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const sortTodo = (list) => {
  return {
    type: SORT_TODO,
    list
  };
};
