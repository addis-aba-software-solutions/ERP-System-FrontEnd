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
        localStorage.setItem('token',user.data.token);
        localStorage.setItem('id',user.data.id);
        localStorage.setItem('username',user.data.username);
        alert("dep before")
        localStorage.setItem('department',user.data.department);
        localStorage.setItem('role',user.data.role);
        localStorage.setItem('level',user.data.level);
      
        dispatch({
          type: appConstants.LOGIN_SUCCESS,
          payload:user.data
        }
        );
        alert("afeter")
       
      })
      .catch(error => {  
        console.log(error);
        
        dispatch({
          type: appConstants.LOGIN_FAILURE,
          payload:error.response.data.errors
        }
        );
      })
    }
  }
  




function logout() {
  return { 
    type: userConstants.LOGOUT,
    payload:false
  };
 
}


export default actions