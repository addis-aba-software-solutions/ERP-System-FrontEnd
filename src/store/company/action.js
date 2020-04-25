import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { companyConstant, errorsConstant } from "../../constant/constants";

// ADD COMPANY
export const addCompany = (company) => (dispatch) => {
  console.log("th item");
  console.log(company);
  axios
    .post(API + "company/", company)
    .then((res) => {
      Swal.fire({
        title: "Success",
        icon: "success",
      });
      dispatch({
        type: companyConstant.ADD_COMPANY,
        payload: res.data,
      });
    })
    .catch((err) => {
      try {
        dispatch({
          type: errorsConstant.GET_ERRORS,
          payload: err.response.data,
        });
      } catch {
        console.log("error");
      }
    });
};

// GET COMPANYS
export const getCompany = () => (dispatch) => {
  axios
    .get(API + "company/")
    .then((res) => {
      dispatch({
        type: companyConstant.GET_COMPANYS,
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

// DELETE COMPANY
export const deleteCompany = (companyId) => (dispatch) => {
  axios
    .delete(API + `company/${companyId}/`)
    .then((res) => {
      Swal.fire({
        title: "Success",
        icon: "success",
      });
      dispatch({
        type: companyConstant.DELETE_COMPANY,
        payload: companyId,
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
