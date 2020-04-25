<<<<<<< HEAD
import { appConstants } from "../../constant/constants";
=======
import { appConstants, itConstants } from "../../constant/constants";
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
const initialState = {
  users: [],
  loading: false,
  isLogin: false,
<<<<<<< HEAD
  errors: [],
};
export default function hrReducer(state = initialState, action) {
  switch (action.type) {
=======
  success: true,
  errors: [],
  employees: [],
  employee: [],
  department: [],
};
export default function hrReducer(state = initialState, action) {
  switch (action.type) {
    case itConstants.REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case itConstants.REGISTER_SUCCESS: {
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
    case itConstants.REGISTER_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
    case appConstants.REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case appConstants.REGISTER_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
<<<<<<< HEAD
=======
        success: false,
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
      };
    }
    case appConstants.REGISTER_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
<<<<<<< HEAD
      };
    }

    default:
=======
        success: false,
      };
    }

    case appConstants.FETCH_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case appConstants.FETCH_SUCCESS: {
      return {
        ...state,
        employees: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case appConstants.FETCH_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case appConstants.FETCH_SINGLE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case appConstants.FETCH_SINGLE_SUCCESS: {
      return {
        ...state,
        employee: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case appConstants.FETCH_SINGLE_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case appConstants.FETCH_DEPARTMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case appConstants.FETCH_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        department: action.payload,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case appConstants.FETCH_DEPARTMENT_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case appConstants.DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case appConstants.DELETE_SUCCESS: {
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.employeId !== action.payload
        ),
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case appConstants.DELETE_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case appConstants.DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case itConstants.DELETE_SUCCESS: {
      const index = state.employees.findIndex(
        (emp) => emp.email === action.payload
      );
      state.employees[index].has_account = false;
      return {
        ...state,
        employees: state.employees,
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case itConstants.DELETE_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case itConstants.REGISTER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case itConstants.REGISTER_SUCCESS: {
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
        success: true,
      };
    }
    case itConstants.REGISTER_FAILURE: {
      return {
        ...state,
        errors: action.payload,
        loading: false,
        isLogin: false,
        success: false,
      };
    }

    case itConstants.GETALL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case itConstants.GETALL_SUCCESS: {
      return {
        ...state,
        employees: action.payload.filter(
          (emp) => emp.email !== localStorage.getItem("email")
        ),
        errors: [],
        loading: false,
        isLogin: true,
        success: true,
      };
    }
    case itConstants.GETALL_FAILURE: {
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
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
      return state;
  }
}
