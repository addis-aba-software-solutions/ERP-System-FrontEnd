import {
  GET_ORDER,
  GET_STATUS,
  UPDATE_STATUS,
  GET_SINGLE_ORDER,
  errorsConstant,
} from "../../constant/constants";
import axios from "axios";
import Swal from "sweetalert2";
import API from "../../api/API";
import headers from './../headers'


// GET ORDER
export const getOrders = () => (dispatch) => {
  axios
    .get(API + "orderstatus/", headers)
    .then((res) => {

      dispatch({
        type: GET_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch({
          type: errorsConstant.GET_ERRORS,
          payload: err.response.data,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Connection Problem",
          icon: "error",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
};

// GET ORDER
export const getSingleOrder = (orderNumber) => (dispatch) => {
  axios
    .get(API + `order/${orderNumber}/`, headers)
    .then((res) => {


      dispatch({
        type: GET_SINGLE_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch({
          type: errorsConstant.GET_ERRORS,
          payload: err.response.data,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Connection Problem",
          icon: "error",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
};

// Get ALL STATUS
export const getStatus = () => (dispatch) => {
  axios
    .get(API + "status/")
    .then((res) => {
      dispatch({
        type: GET_STATUS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch({
          type: errorsConstant.GET_ERRORS,
          payload: err.response.data,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Connection Problem",
          icon: "error",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
};

// UPDATE STATUS
export const updateStatus = (orderNumber, status) => (dispatch) => {
  axios
    .put(API + `status/${orderNumber}/`, status, headers)
    .then((res) => {

      dispatch({
        type: UPDATE_STATUS,
        payload: { orderNumber: orderNumber, data: res.data },
      });
      Swal.fire({
        title: "Updated",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
      });
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch({
          type: errorsConstant.GET_ERRORS,
          payload: err.response.data,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Connection Problem",
          icon: "error",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
};
