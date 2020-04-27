import { GET_SIV, errorsConstant } from "../../constant/constants";
import axios from "axios";
import API from "../../api/API";

// GET SIV TAKES ORDER NUMBER
  function getSiv(order) {
    return (dispatch) => {
  axios
    .get(API + `generatesiv/${order}`)
    .then((res) => {
      dispatch({
        type: GET_SIV,
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
  }
export default getSiv