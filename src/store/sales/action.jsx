import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { salesConstants, errorsConstant } from "../../constant/constants";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer" + localStorage.getItem("token"),
};
function createOrder(data) {
  var params = {
    orderNumber: data.orderNumber,
    company: data.company,
    quantity: data.itemQuantity,
    description: data.description,
    discount: data.discount,
    salesPerson: localStorage.getItem("username"),
    item_order: data.order_items,
    shipmentAddress: data.shipmentAddress,
  };
  return (dispatch) => {
    dispatch({
      type: salesConstants.ORDER_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "POST",
        url: API + "order/",
        responseType: "json",
        headers: headers,
        data: params,
      })
      .then((response) => {
        Swal.fire({
          title: "Order Created",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });

        dispatch({
          type: salesConstants.ORDER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          if (error.response.status == 404) {
            Swal.fire({
              title: "<strong>Error <u>info</u></strong><p>",
              icon: "error",
              html:
                "<p>" +
                error.response.data.Error +
                "</p><b>Item Name :</b>" +
                error.response.data.item.itemName +
                " <br/>" +
                "<b>available quantity :</b> " +
                error.response.data.item.available,
              showCancelButton: false,
              focusConfirm: false,
              confirmButtonText: "OK!",
            });
          } else {
            dispatch({
              type: salesConstants.ORDER_FAILURE,
              payload: error.response.data,
            });
          }
        } else {
          Swal.fire({
            title: "Error",
            text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
}

function getAllCompany() {
  return (dispatch) => {
    dispatch({
      type: salesConstants.COMPANY_GETALL_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "company/",
        responseType: "json",
        headers: headers,
      })
      .then((response) => {
        dispatch({
          type: salesConstants.COMPANY_GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: salesConstants.COMPANY_GETALL_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
}
function getAllItem() {
  return (dispatch) => {
    dispatch({
      type: salesConstants.ITEM_GETALL_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "item/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);

        dispatch({
          type: salesConstants.ITEM_GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: salesConstants.ITEM_GETALL_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
}
// GET ALL ORDERS
function getAllOrder() {
  return (dispatch) => {
    dispatch({
      type: salesConstants.ITEM_GETALL_REQUEST,
      payload: true,
    });
    axios
      .request({
        method: "GET",
        url: API + "orderstatus/",
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);

        dispatch({
          type: salesConstants.ORDER_GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          dispatch({
            type: salesConstants.ORDER_GETALL_FAILURE,
            payload: error.response.data.errors,
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Connection Problem",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
}
const actions = {
  createOrder,
  getAllCompany,
  getAllItem,
  getAllOrder,
};

export default actions;
