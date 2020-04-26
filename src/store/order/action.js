import {
  GET_ORDER,
  GET_STATUS,
  errorsConstant,
} from "../../constant/constants";
import axios from "axios";
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
      console.log(err);
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

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
