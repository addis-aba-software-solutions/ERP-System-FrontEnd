import { GET_INVOICE, errorsConstant } from "../../constant/constants";
import axios from "axios";
import API from "../../api/API";

// GET INVOICE TAKES ORDER NUMBNER
export const getInvoice = (order) => (dispatch) => {
  axios
    .get(API + `generateinvoice/${order}`)
    .then((res) => {
      
      dispatch({
        type: GET_INVOICE,
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
