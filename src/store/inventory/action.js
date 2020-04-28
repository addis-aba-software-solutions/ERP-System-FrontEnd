import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { inventoryConstant, errorsConstant } from "../../constant/constants";
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: "Bearer" + localStorage.getItem("token")
  }
};

// ADD ITEM
export const addItem = (item) => (dispatch) => {
  
  
  axios
    .post(API + "item/", config, item)
    .then((res) => {
      Swal.fire({
        title: "Success",
        icon: "success",
      });
      dispatch({
        type: inventoryConstant.ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      if(err.response && err.response.data){
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    } else {
      Swal.fire({
        title: "Error", text:"Connection Problem",
        icon: "Error",
      });
    }
    });
};
// GET ITEM
export const getItems = () => (dispatch) => {
  axios
    .get(API + "item/", config)
    .then((res) => {
      dispatch({
        type: inventoryConstant.GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if(err.response && err.response.data){
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    } else {
      Swal.fire({
        title: "Error", text:"Connection Problem",
        icon: "Error",
      });
    }
    });
};

// DELETE ITEM
export const deleteItem = (InventoryItemId) => (dispatch) => {
  axios
    .delete(API + `item/${InventoryItemId}/`,config)
    .then((res) => {
      Swal.fire({
        title: "Success",
        icon: "success",
      });
      dispatch({
        type: inventoryConstant.DELETE_ITEM,
        payload: InventoryItemId,
      });
    })
    .catch((err) => {
      if(err.response && err.response.data) {
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    }  else {
      Swal.fire({
        title: "Error", text:"Connection Problem",
        icon: "Error",
      });
    }
    });
};
