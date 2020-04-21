
import {appConstants,userConstants} from '../../constant/constants'
import { stat } from 'fs';
const initialState = {
    users: [],
    loading: false,
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
        };
      }
      case appConstants.LOGIN_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
        };
      }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }