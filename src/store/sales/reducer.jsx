import { salesConstants } from "../../constant/constants";
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
      const index = state.employees.findIndex(
        (emp) => emp.email === action.payload
      );
      const employees = state.employees[index];
      employees.has_account = true;
      return {
        ...state,
        users: employees,
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
