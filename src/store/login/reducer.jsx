
import {appConstants,userConstants} from '../../constant/constants'
import { stat } from 'fs';
const initialState = {
    users: [],
    loading: false,
    success:false,
    errors: [],
  
  }
  export default function loginReducer(state = initialState, action) {
    switch (action.type) {
      case appConstants.LOGIN_REQUEST: {
        return {
          ...state,
          loading:true,
        };
      }
      case appConstants.LOGIN_SUCCESS: {
    
        return {
          ...state,
          users: action.payload,
          errors:[],
          loading:false,
          success:true,
        };
      }
      case appConstants.LOGIN_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          success:false,
        };
      }
      case appConstants.LOGOUT: {
        return {
          ...state,
          success:action.payload,
        };
      }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }