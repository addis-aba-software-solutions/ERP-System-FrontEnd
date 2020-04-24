import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import hrReducer from "./hr/reducer";
import salesReducer from "./sales/reducer";

export default combineReducers({
  loginReducer,
  hrReducer,
  salesReducer,
});
