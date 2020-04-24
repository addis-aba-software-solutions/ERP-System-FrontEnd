import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import {
  companyConstant,
  errorsConstant,
  inventoryConstant,
} from "../../constant/constants";

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

      console.log("before company add catch");
      dispatch({
        type: companyConstant.ADD_COMPANY,
        payload: res.data,
      });
      console.log("after dispatch add catch");
    })
    .catch((err) => {
      console.log("in the company add catch");
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
export const getCompanys = () => (dispatch) => {
  axios
    .get(API + "company/")
    .then((res) => {
      // dispatch({
      //   type: companyConstant.GET_COMPANYS,
      //   payload: res.data,
      // });
    })
    .catch((err) => {
      console.log("in the company GET catch");
      console.log(err.response.data);
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    });
};
