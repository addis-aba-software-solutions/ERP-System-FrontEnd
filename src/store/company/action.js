import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { companyConstant, errorsConstant } from "../../constant/constants";
import headers from './../headers'

// ADD COMPANY
export const addCompany = (company) => (dispatch) => {

  axios
    .post(API + "company/", company, headers)
    .then((res) => {
      Swal.fire({
        title: "Success",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
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
    .get(API + "company/", headers)
    .then((res) => {
      dispatch({
        type: companyConstant.GET_COMPANYS,
        payload: res.data,
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
          title: "Error", text: "Connection Problem",
          icon: "error",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
};

// DELETE COMPANY
export const deleteCompany = (companyId) => (dispatch) => {
  Swal.fire({
    title: "Are you sure?",
    text: "Are you not revert this action!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes,",
    cancelButtonText: "no",
  }).then((result) => {
    if (result.value) {
      axios
        .delete(API + `company/${companyId}/`, headers)
        .then((res) => {

          Swal.fire({
            title: "Deleted",
            icon: "success",
            showConfirmButton: false,
            timer: 1000
          });
          dispatch({
            type: companyConstant.DELETE_COMPANY,
            payload: companyId,
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
              title: "Error", text: "Connection Problem",
              icon: "error",
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
    }
  });
};
