import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import hrReducer from "./hr/reducer";
import inventoryReducer from "./inventory/reducer";
import errorsReducer from "./inventory/errors";
import companyReducer from "./company/reducer";
import invoiceReducer from "./Invoice/reducer";

export default combineReducers({
  loginReducer,
  hrReducer,
  inventoryReducer,
  companyReducer,
  errorsReducer,
  invoiceReducer,
});
