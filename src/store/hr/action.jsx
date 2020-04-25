import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
<<<<<<< HEAD
import { appConstants } from "../../constant/constants";
=======
import { appConstants, itConstants } from "../../constant/constants";
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e

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
        headers: {
          "Content-Type": "application/json",
<<<<<<< HEAD
        },
        data: param,
      })
      .then((user) => {
        Swal.fire({
          title: "Success",
          icon: "success",
        });
        dispatch({
          type: appConstants.REGISTER_SUCCESS,
          payload: user.data.user,
=======
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: param,
      })
      .then((response) => {
        Swal.fire("Created!", "New employee added.", "success");
        dispatch({
          type: appConstants.REGISTER_SUCCESS,
          payload: response.data,
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
        });
      })
      .catch((error) => {
        dispatch({
          type: appConstants.REGISTER_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
<<<<<<< HEAD

function addAccount(data) {
  return (dispatch) => {
    var param = {
      username: data.username,
      lastName: data.password,
      department: data.depValue,
      roles: data.rolValue,
      level: data.levValue,
    };

    dispatch({
      type: appConstants.REGISTER_REQUEST,
=======
function getEmploye() {
  return (dispatch) => {
    dispatch({
      type: itConstants.GETALL_REQUEST,
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
      payload: true,
    });
    axios
      .request({
<<<<<<< HEAD
        method: "POST",
        url: API + "account/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
        data: param,
      })
      .then((user) => {
        Swal.fire({
          title: "Success",
          icon: "success",
        });
        dispatch({
          type: appConstants.REGISTER_SUCCESS,
          payload: user.data.user,
        });
      })
      .catch((error) => {
        dispatch({
          type: appConstants.REGISTER_FAILURE,
=======
        method: "GET",
        url: API + "employe/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: itConstants.GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: itConstants.GETALL_FAILURE,
          payload: error.response.data.errors,
        });
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
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
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
        dispatch({
          type: appConstants.DELETE_FAILURE,
          payload: error.response.data.errors,
        });
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
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
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
        dispatch({
          type: itConstants.DELETE_FAILURE,
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
          payload: error.response.data.errors,
        });
      });
  };
}

<<<<<<< HEAD
=======
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
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
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
          console.log(error);
          Swal.fire("Error!", "Something went wrong.", "error");
          dispatch({
            type: itConstants.REGISTER_FAILURE,
            payload: error.response.data.errors,
          });
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
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: appConstants.FETCH_SINGLE_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: appConstants.FETCH_SINGLE_FAILURE,
          payload: error.response.data.errors,
        });
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
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        dispatch({
          type: appConstants.FETCH_DEPARTMENT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: appConstants.FETCH_DEPARTMENT_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
>>>>>>> 9eab4a52884f356fd58458801886d5294fcb922e
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
