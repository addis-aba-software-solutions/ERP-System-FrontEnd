import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { appConstants } from "../../constant/constants";

function login(username, password) {
  return (dispatch) => {
    var data = {
      username: username,
      password: password,
    };
    dispatch({
      type: appConstants.LOGIN_REQUEST,
      payload: true,
    });

    axios
      .request({
        method: "POST",
        url: API + "login/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
      .then((user) => {
        localStorage.setItem("token", user.data.user.token);
        localStorage.setItem("id", user.data.user.id);
        localStorage.setItem("email", user.data.user.email);
        localStorage.setItem("username", user.data.user.username);
        localStorage.setItem("department", user.data.user.department);
        localStorage.setItem("role", user.data.user.role);
        localStorage.setItem("level", user.data.user.level);
        dispatch({
          type: appConstants.LOGIN_SUCCESS,
          payload: user.data.user,
        });
      })
      .catch((error) => {
        dispatch({
          type: appConstants.LOGIN_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}

function logout() {
  return (dispatch) => {
    removeStorage();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.value) {
        
        dispatch({
          type: appConstants.LOGOUT,
          payload: false,
        });
        window.location.href = '/';
      }
    });
  };
}

function removeStorage() {
  localStorage.setItem("username", "");
  localStorage.setItem("id", "");
  localStorage.setItem("token", "");
  localStorage.setItem("department", "");
  localStorage.setItem("level", "");
  localStorage.setItem("role", "");
}
const actions = {
  login,
  logout,
  removeStorage,
};

export default actions;
