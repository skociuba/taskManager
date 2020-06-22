import {
  TOGGLE_TODO,
  ADD_POST,
  REMOVE_POST,
  CHANGE_POST,
  RESET_POST,
  TOGGLE_FILTER,
  DONE_TODO
} from "./taskTypes"

export const addPost = item => ({
  type: ADD_POST,
  completed: false,
  body: item.body
});
export const removePost = id => ({
  type: REMOVE_POST,
  id
});
export const changePost = item => ({
  type: CHANGE_POST,

  id: item.id,
  body: item.body
});
export const resetPost = item => ({
  type: RESET_POST,
  item
});
export const toggleTodo = (id, completed) => ({
  type: TOGGLE_TODO,
  id,
  completed
});
export const toggleFilter = item => ({
  type: TOGGLE_FILTER,
  id: item.id,
  body: item.body
});
export const doneTodo = (id, done) => ({
  type: DONE_TODO,
  id,
  done
});
