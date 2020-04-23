import {appConstants} from '../../constant/constants'
const initialState = {
    users: [],
    loading: false,
    isLogin:false,
    errors: [],
  
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
        return {
          ...state,
          users: action.payload,
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

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }