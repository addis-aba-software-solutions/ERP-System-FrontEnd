import { GET_SIV, errorsConstant } from "../../constant/constants";
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
