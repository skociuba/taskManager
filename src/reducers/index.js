import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import taskReducer from "./taskReducer";
export default combineReducers({
  titles: taskReducer,
  isLoginPending: loginReducer,
  isLoginSuccess: loginReducer,
  loginError: loginReducer
});
