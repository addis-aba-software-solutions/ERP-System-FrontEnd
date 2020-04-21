import {appConstants} from '../../constant/constants'

import { stat } from 'fs';
const initialState = {
    users: [],
    loading: false,
    isLogin:false,
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
          isLogin:true
        };
      }
      case appConstants.LOGIN_FAILURE: {
        return {
          ...state,
          errors: action.payload,
          loading:false,
          isLogin:false,
        };
      }

      case appConstants.LOGOUT: {
            return {
              ...state,
              isLogin:action.payload,
            };
        
      
    }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }