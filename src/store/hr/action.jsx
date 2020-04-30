import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { appConstants, itConstants } from "../../constant/constants";
import headers from "./../headers";

function addNewEmployee(data) {
  return (dispatch) => {
    var param = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      hiredDate: data.hiredDate,
      telephone: data.telephone,
      department: data.depValue,
      roles: data.rolValue,
      level: data.levValue,
      termOfEmployment: data.termOfEmployment,
      country: data.country,
      city: data.city,
      region: data.region,
      birthDate: data.birthDate,
    };

    dispatch({
      type: appConstants.REGISTER_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "POST",
        url: API + "employe/",
        responseType: "json",
        headers: headers,
        data: param,
      })
      .then((response) => {
        Swal.fire({
          title: "Created",
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        });
        dispatch({
          type: appConstants.REGISTER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: appConstants.REGISTER_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire("Error", "Connection Problem", "Error");
        }
      });
  };
}
function getEmploye() {
  return (dispatch) => {
    dispatch({
      type: itConstants.GETALL_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "employe/",
        responseType: "json",
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: itConstants.GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: itConstants.GETALL_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Connection Problem",
            icon: "Error",
          });
        }
      });
  };
}
function deleteEmploye(employeId) {
  return (dispatch) => {
    dispatch({
      type: appConstants.DELETE_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "DELETE",
        url: API + "employe/" + employeId,
        responseType: "json",
        headers: headers,
      })
      .then((response) => {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch({
          type: appConstants.DELETE_SUCCESS,
          payload: employeId,
        });
      })
      .catch((error) => {
        Swal.fire("Error!", "Something went wrogn.", "error");
        if (error.response && error.response.data) {
          dispatch({
            type: appConstants.DELETE_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire("Error", "Connection Problem", "Error");
        }
      });
  };
}

function deleteAccount(email) {
  return (dispatch) => {
    dispatch({
      type: itConstants.DELETE_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "DELETE",
        url: API + "account",
        responseType: "json",
        headers: headers,
        data: {
          email: email,
        },
      })
      .then((response) => {
        dispatch({
          type: itConstants.DELETE_SUCCESS,
          payload: email,
        });
        Swal.fire("Deleted!", "Account deleted!", "success");
      })

      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: itConstants.DELETE_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire("Error", "Connection Problem", "Error");
        }
      });
  };
}

function addAccount(employe) {
  return (dispatch) => {
    dispatch({
      type: itConstants.REGISTER_REQUEST,
      payload: true,
    });
    Swal.fire({
      title: "Admin?",
      text: "Do you need this user act as admin?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,",
      cancelButtonText: "no",
    }).then((result) => {
      axios
        .request({
          method: "POST",
          url: API + "account/",
          responseType: "json",
          headers: headers,
          data: {
            username: employe.email,
            password: employe.email,
            email: employe.email,
            employe: employe.employe,
            department: employe.department,
            roles: employe.role,
            claim: employe.claim,
            is_admin: result.value ? true : false,
          },
        })
        .then((response) => {
          Swal.fire("created!", "Account has been added.", "success");
          dispatch({
            type: itConstants.REGISTER_SUCCESS,
            payload: response.data.email,
          });
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire("Error!", "Something went wrong.", "error");
          if (error.response && error.response.data) {
            dispatch({
              type: itConstants.REGISTER_FAILURE,
              payload: error.response.data.errors,
            });
          } else {
            Swal.fire("Error", "Connection Problem", "Error");
          }
        });
    });
  };
}

function getEmployeDetail(employeId) {
  return (dispatch) => {
    dispatch({
      type: appConstants.FETCH_SINGLE_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "employe/" + employeId,
        responseType: "json",
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: appConstants.FETCH_SINGLE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: appConstants.FETCH_SINGLE_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire("Error", "Connection Problem", "Error");
        }
      });
  };
}

function getDepartment() {
  return (dispatch) => {
    dispatch({
      type: appConstants.FETCH_DEPARTMENT_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "department/",
        responseType: "json",
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: appConstants.FETCH_DEPARTMENT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: appConstants.FETCH_DEPARTMENT_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire("Error", "Connection Problem", "Error");
        }
      });
  };
}
const actions = {
  addNewEmployee,
  addAccount,
  deleteAccount,
  deleteEmploye,
  getEmploye,
  getEmployeDetail,
  getDepartment,
};

export default actions;
