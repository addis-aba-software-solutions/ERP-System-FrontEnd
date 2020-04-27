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
    .get(API + "order/")
    .then((res) => {
      dispatch({
        type: GET_ORDER,
        payload: res.data,
      });
    })
    .catch((err) => {
   
      
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
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
      console.log(err);
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
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
    .put(API + `status/${orderNumber}/`, status,config)
    .then((res) => {
      alert(orderNumber);
      alert(status);
      Swal.fire({
        title: "Success",
        icon: "success",
      });
      dispatch({
        type: UPDATE_STATUS,
        payload: { orderNumber: orderNumber, data: res.data },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    });
};
