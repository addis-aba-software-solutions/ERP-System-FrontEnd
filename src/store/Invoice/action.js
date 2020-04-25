import { GET_INVOICE, errorsConstant } from "../../constant/constants";
import axios from "axios";
import API from "../../api/API";

export const getInvoice = (invoiceId) => (dispatch) => {
  axios
    .get(API + `generateinvoice/${invoiceId}`)
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
