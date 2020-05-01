import { GET_INVOICE, errorsConstant, UPDATE_ORDER } from "../../constant/constants";
import axios from "axios";
import API from "../../api/API";
import Swal from "sweetalert2";
import headers from "./../headers";

// GET INVOICE TAKES ORDER NUMBNER
export const getInvoice = (order) => (dispatch) => {
  axios
    .get(API + `generateinvoice/${order}/`, headers)
    .then((res) => {
      dispatch({
        type: UPDATE_ORDER,
        payload: { order: res.data.order, status: "Invoiced" }
      });
      dispatch({
        type: GET_INVOICE,
        payload: res.data.order,
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
