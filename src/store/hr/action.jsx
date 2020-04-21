import axios from 'axios'
import API from '../../api/API'
import {appConstants,userConstants} from '../../constant/constants'

 const actions = {
  login,
  logout,
};
function login(username, password) {
  return dispatch => {
    var data={
      username:username,
      password:password
    }
    dispatch({
      type: appConstants.LOGIN_REQUEST,
      payload:true
    }
    );

    axios.request({
      method: 'POST',
      url: API+"login/",
      responseType: 'json',
      headers: {
        "Content-Type":"application/json"
      }, 
      data:data
    })
      .then((user) => {  
        alert()
        dispatch({
          type: appConstants.LOGIN_SUCCESS,
          payload:user.data
        }
        );
      })
      .catch(error => {  
        alert()
        dispatch({
          type: appConstants.LOGIN_FAILURE,
          payload:error.response.data.errors
        }
        );
      })
    }
  }
  

function logout() {
  localStorage.setItem("username","");
  localStorage.setItem("id","");
  localStorage.setItem("token","");
  localStorage.setItem("department","");
  localStorage.setItem("level","");
  localStorage.setItem("role","");

  return { type: userConstants.LOGOUT };
}

export default actions