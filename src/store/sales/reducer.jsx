import { salesConstants } from "../../constant/constants";
import actions from "./action";
const initialState = {
  loading: false,
  isLogin: false,
  success: true,
  errors: [],
  order: [],
  companys: [],
  items: [],
};
export default function salesReducer(state = initialState, action) {
  switch (action.type) {
    case salesConstants.ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case salesConstants.ORDER_SUCCESS: {
      return {
        ...state,
        errors: [],
        loading: false,
        isLogin: true,
        success: false,
      };
    }
    case salesConstants.ORDER_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case salesConstants.ITEM_GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case salesConstants.ITEM_GETALL_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: false,
      };
    }
    case salesConstants.ITEM_GETALL_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case salesConstants.COMPANY_GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case salesConstants.COMPANY_GETALL_SUCCESS: {
      return {
        ...state,
        companys: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: false,
      };
    }
    case salesConstants.COMPANY_GETALL_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }
    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
