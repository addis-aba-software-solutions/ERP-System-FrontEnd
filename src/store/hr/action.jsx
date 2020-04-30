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
          Swal.fire({
            title: "Error", text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
          });
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
            title: "Error", text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
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
        Swal.fire({
          title: "Deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        });
        dispatch({
          type: appConstants.DELETE_SUCCESS,
          payload: employeId,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error", text: "Something Went Wrong",
          icon: "error",
          showConfirmButton: false,
          timer: 1000
        });
        if (error.response && error.response.data) {
          dispatch({
            type: appConstants.DELETE_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Error", text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
          });
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
        Swal.fire({
          title: "Deleted",
          text: "Account Has Been Deleted",
          icon: "success",
          showConfirmButton: false,
          timer: 1000
        });
      })

      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: itConstants.DELETE_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Error", text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
          });
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
      title: "Is this User An Admin?",
      text: "YES-(Make Admin), NO-(Create Basic Account)",
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
          Swal.fire({
            title: "Created",
            text: "Account Has Been Created",
            icon: "success",
            showConfirmButton: false,
            timer: 1000
          });
          dispatch({
            type: itConstants.REGISTER_SUCCESS,
            payload: response.data.email,
          });
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({
            title: "Error", text: "Something Went Wrong",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
          });
          if (error.response && error.response.data) {
            dispatch({
              type: itConstants.REGISTER_FAILURE,
              payload: error.response.data.errors,
            });
          } else {
            Swal.fire({
              title: "Error", text: "Connection Problem",
              icon: "error",
              showConfirmButton: false,
              timer: 1000
            });
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
          Swal.fire({
            title: "Error", text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
          });
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
          Swal.fire({
            title: "Error", text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
          });
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
