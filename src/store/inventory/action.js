import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { inventoryConstant, errorsConstant } from "../../constant/constants";
import headers from "./../headers";



// ADD ITEM
export const addItem = (item) => (dispatch) => {
  axios
    .request({
      method: "POST",
      url: API + "item/",
      responseType: "json",
      headers: headers,
      data: item,
    }).then((res) => {
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
      if (err.response && err.response.data) {
        dispatch({
          type: errorsConstant.GET_ERRORS,
          payload: err.response.data,
        });
      } else {
        Swal.fire({
          title: "Error", text: "Connection Problem",
          icon: "Error",
        });
      }
    });
};
// GET ITEM
export const getItems = () => (dispatch) => {
  axios
    .get(API + "item/", headers)
    .then((res) => {
      dispatch({
        type: inventoryConstant.GET_ITEMS,
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
          icon: "Error",
        });
      }
    });
};

export const updateItemQuantity = (itemId, quantity) => (dispatch) => {
  axios
    .request({
      method: "PUT",
      url: API + `item/${itemId}/`,
      responseType: "json",
      headers: headers,
      data: {
        quantity: quantity
      },
    }).then((res) => {
      Swal.fire({
        title: "Success",
        icon: "success",
      });
      dispatch({
        type: inventoryConstant.UDATE_ITEM,
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
          icon: "Error",
        });
      }
    });
};
// DELETE ITEM
export const deleteItem = (InventoryItemId) => (dispatch) => {
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
        .delete(API + `item/${InventoryItemId}/`, headers)
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
          if (err.response && err.response.data) {
            dispatch({
              type: errorsConstant.GET_ERRORS,
              payload: err.response.data,
            });
          } else {
            Swal.fire({
              title: "Error", text: "Connection Problem",
              icon: "Error",
            });
          }
        });
    }
  });
};
