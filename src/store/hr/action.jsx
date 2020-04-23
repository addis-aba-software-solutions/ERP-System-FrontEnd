import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { appConstants, itConstants } from "../../constant/constants";

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
          payload: error.response.data.errors,
        });
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
      .get(API + "employe/")
      .then((response) => {
        console.log(response);

        dispatch({
          type: itConstants.GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: itConstants.GETALL_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
function deleteEmploye(employeId) {
  return (dispatch) => {
    axios
      .request({
        method: "DELETE",
        url: API + "employe/" + employeId,
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        getEmploye();
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch({
          type: appConstants.REGISTER_SUCCESS,
          payload: response.data.user,
        });
      })
      .catch((error) => {
        Swal.fire("Error!", "Something went wrogn.", "error");
        dispatch({
          type: appConstants.REGISTER_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
function deleteAccount(employeId) {
  return (dispatch) => {
    axios
      .request({
        method: "DELETE",
        url: API + "account/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((user) => {
        getEmploye();
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
          payload: error.response.data.errors,
        });
      });
  };
}

function addAccount(employe) {
  return (dispatch) => {
    var param = {
      username: employe.email,
      password: employe.email,
      email: employe.email,
      employe: employe.employe,
      department: employe.department,
      role: employe.role,
      claim: employe.claim,
    };

    dispatch({
      type: appConstants.REGISTER_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "POST",
        url: API + "account/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
        data: param,
      })
      .then((user) => {
        getEmploye();
        Swal.fire("created!", "Your file has been added.", "success");
        dispatch({
          type: appConstants.REGISTER_SUCCESS,
          payload: user.data.user,
        });
      })
      .catch((error) => {
        Swal.fire("Error!", "Something went wrong.", "error");
        dispatch({
          type: appConstants.REGISTER_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}

const actions = {
  addNewEmployee,
  addAccount,
  deleteAccount,
  deleteEmploye,
  getEmploye,
};

export default actions;
