import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { salesConstants } from "../../constant/constants";

function createOrder(data) {
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
      type: salesConstants.ORDER_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "POST",
        url: API + "order/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: param,
      })
      .then((response) => {
        console.log(response);
        Swal.fire("Created!", "New employee added.", "success");
        dispatch({
          type: salesConstants.ORDER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: salesConstants.ORDER_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
function getAllCompany() {
  return (dispatch) => {
    dispatch({
      type: salesConstants.COMPANY_GETALL_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "company/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: salesConstants.COMPANY_GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: salesConstants.COMPANY_GETALL_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
function getAllItem() {
  return (dispatch) => {
    dispatch({
      type: salesConstants.ITEM_GETALL_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "item/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);

        dispatch({
          type: salesConstants.ITEM_GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: salesConstants.ITEM_GETALL_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
const actions = {
  createOrder,
  getAllCompany,
  getAllItem,
};

export default actions;
