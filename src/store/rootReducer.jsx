  
import { combineReducers } from "redux";
import loginReducer from './login/reducer'
import hrReducer from './hr/reducer'

export default combineReducers({
  loginReducer,
  hrReducer,
});