import {appConstants,itConstants} from '../../constant/constants'
const initialState = {
    users: [],
    loading: false,
    isLogin:false,
    success:true,
    errors: [],
    employees:[],


  
  }
  export default function hrReducer(state = initialState, action) {
    switch (action.type) {
      case appConstants.REGISTER_REQUEST: {
        return {
          ...state,
          loading:true,
        };
      }
      case appConstants.REGISTER_SUCCESS: {
        const index = state.employees.findIndex(emp => emp.email === action.payload);
        const employees=state.employees[index];
        employees.has_account=true;
        return {
          ...state,
          users: employees,
          errors:[],
          loading:false,
          isLogin:true
        };
      }
      case appConstants.REGISTER_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          isLogin:false,
        };
      }

      case appConstants.FETCH_REQUEST: {
        return {
          ...state,
          loading:true,
        };
      }

      case appConstants.FETCH_SUCCESS: {
        return {
          ...state,
          employees: action.payload,
          errors:[],
          loading:false,
          isLogin:true,
          success:true,
          
        };
      }
      case appConstants.FETCH_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          isLogin:false,
          success:false,
        };
      }



      case appConstants.DELETE_REQUEST: {
        return {
          ...state,
          loading:true,
        };
      }

      case appConstants.DELETE_SUCCESS: {
        return {
          ...state,
          employees:state.employees.filter((emp) => emp.employeId !== action.payload),
          errors:[],
          loading:false,
          isLogin:true,
          success:true,
          
        };
      }
      case appConstants.DELETE_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          isLogin:false,
          success:false,
        };
      }


      case appConstants.DELETE_REQUEST: {
        return {
          ...state,
          loading:true,
        };
      }

      case itConstants.DELETE_SUCCESS: {
        const index = state.employees.findIndex(emp => emp.email === action.payload);
        const employees=state.employees[index].has_account=false;
        console.log(employees)
        return {
          ...state,
          employees:state.employees,
          errors:[],
          loading:false,
          isLogin:true,
          success:true,
          
        };
      }
      case itConstants.DELETE_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          isLogin:false,
          success:false,
        };
      }


      case itConstants.REGISTER_REQUEST: {
        return {
          ...state,
          loading:true,
        };
      }

      case itConstants.REGISTER_SUCCESS: {
        return {
          ...state,
          users: action.payload,
          errors:[],
          loading:false,
          isLogin:true
        };
      }
      case itConstants.REGISTER_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          isLogin:false,
        };
      }

      case itConstants.GETALL_REQUEST: {
        return {
          ...state,
          loading:true,
        };
      }

      case itConstants.GETALL_SUCCESS: {
        return {
          ...state,
          employees: action.payload,
          errors:[],
          loading:false,
          isLogin:true,
          success:true,
          
        };
      }
      case itConstants.GETALL_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          isLogin:false,
          success:false,
        };
      }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }