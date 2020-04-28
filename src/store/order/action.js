import {
  GET_ORDER,
  GET_STATUS,
  UPDATE_STATUS,
  errorsConstant,
} from "../../constant/constants";
import axios from "axios";
import Swal from "sweetalert2";
import API from "../../api/API";

// GET ORDER
export const getOrders = () => (dispatch) => {
  axios
    .get(API + "orderstatus/")
    .then((res) => {
      console.log("rsponse")
      console.log(res)
      dispatch({
        type: GET_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => {
      if(err.response && err.response.data){
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    } else {
      Swal.fire({
        title: "Error", text:"Connection Problem",
        icon: "Error",
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
      if(err.response && err.response.data){
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    }else {
      Swal.fire({
        title: "Error", text:"Connection Problem",
        icon: "Error",
      });
    }
    });
};

// UPDATE STATUS
export const updateStatus = (orderNumber, status) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios
    .put(API + `status/${orderNumber}/`, status, config)
    .then((res) => {
      
      dispatch({
        type: UPDATE_STATUS,
        payload: { orderNumber: orderNumber, data: res.data },
      });
      Swal.fire({
        title: "Success",
        icon: "success",
      });
    })
    .catch((err) => {
      if(err.response && err.response.data){
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    }else {
      Swal.fire({
        title: "Error", text:"Connection Problem",
        icon: "Error",
      });
    }
    });
};
