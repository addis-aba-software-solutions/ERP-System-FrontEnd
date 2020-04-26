import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { inventoryConstant, errorsConstant } from "../../constant/constants";

// ADD ITEM
export const addItem = (item) => (dispatch) => {
  console.log(item);
  axios
    .post(API + "item/", item)
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
      console.log(err);
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    });
};
// GET ITEM
export const getItems = () => (dispatch) => {
  axios
    .get(API + "item/")
    .then((res) => {
      dispatch({
        type: inventoryConstant.GET_ITEMS,
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

// DELETE ITEM
export const deleteItem = (InventoryItemId) => (dispatch) => {
  axios
    .delete(API + `item/${InventoryItemId}/`)
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
      console.log(err);
      dispatch({
        type: errorsConstant.GET_ERRORS,
        payload: err.response.data,
      });
    });
};
