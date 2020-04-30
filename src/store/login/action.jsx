import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { appConstants, errorsConstant } from "../../constant/constants";
import headers from "./../headers";
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
        headers: headers,
        data: data,
      })
      .then((user) => {
        localStorage.setItem("token", user.data.user.token);
        localStorage.setItem("id", user.data.user.id);
        localStorage.setItem("email", user.data.user.email);
        localStorage.setItem("username", user.data.user.username);
        localStorage.setItem("is_superuser", user.data.user.is_superuser);
        localStorage.setItem(
          "department",
          user.data.user.department
            ? user.data.user.department.departmentName
            : ""
        );
        localStorage.setItem("role", user.data.user.role);
        localStorage.setItem("level", user.data.user.level);
        dispatch({
          type: appConstants.LOGIN_SUCCESS,
          payload: user.data.user,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: appConstants.LOGIN_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
          });
          dispatch({
            type: appConstants.LOGIN_FAILURE_NETWORK,
            payload: false,
          });
        }
      });
  };
}

function logout() {
  return (dispatch) => {
    
    Swal.fire({
      title: "Logging Out?",
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
        removeStorage();
        window.location.href = "/";
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
