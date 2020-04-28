import { GET_SIV, UPDATE_SIV, errorsConstant } from "../../constant/constants";
import axios from "axios";
import Swal from "sweetalert2";
import API from "../../api/API";

// GET SIV TAKES ORDER NUMBER
export const getSiv = (order) => (dispatch) => {
  axios
    .get(API + `generatesiv/${order}`)
    .then((res) => {
      dispatch({
        type: GET_SIV,
        payload: res.data,
      });
    })
    .catch((err) => {
      if(err.response && err.response.data){
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    }else{
      Swal.fire("Error", "Connection Problem", "Error")
    }
    });
};

// UPDATE siv Status
export const updateSiv = (orderNumber, status) => (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  axios
    .put(API + `generatesiv/${orderNumber}/`, status, config)
    .then((res) => {
      
      dispatch({
        type: UPDATE_SIV,
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
