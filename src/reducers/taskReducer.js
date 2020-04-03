import {
  TOGGLE_TODO,
  ADD_POST,
  REMOVE_POST,
  CHANGE_POST,
  RESET_POST,
  TOGGLE_FILTER,
  DONE_TODO
} from "../actions/taskTypes";
import { v4 } from "node-uuid";
const addTodo = (state, newTodo) => {
  const { body } = newTodo;

  const newId = v4();
  const todo = {
    id: newId,
    body,
    completed: false
  };
  const newState = [...state, todo];
  return newState;
};
const editTodo = (state, updateTodo) => {
 
  const newState = state.map(todo => {
    if (todo.id === updateTodo.id) {
      return {
        id: todo.id,
        body: updateTodo.body
      };
    }
    return todo;
  });
  return newState;
};

const initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return addTodo(state, action);

    case REMOVE_POST:
      return state.filter(item => item.id !== action.id);

    case RESET_POST:
      return initialState;

    case CHANGE_POST:
      return editTodo(state, action);

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed, id: todo.id }
          : todo
      );
    case TOGGLE_FILTER:
      return state.filter(item =>
        item.id !== action.id ? { body: item.body } : "nie znaleziono"
      );
    case DONE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, done: !todo.done, id: todo.id }
          : todo
      );
    default:
      return state;
  }
}
