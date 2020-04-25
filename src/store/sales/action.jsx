import Swal from "sweetalert2";
import axios from "axios";
import API from "../../api/API";
import { salesConstants } from "../../constant/constants";

function createOrder(data) {
  var params = {
    orderNumber: data.orderNumber,
    orderName: data.orderName,
    company: data.company,
    quantity: data.itemQuantity,
    description: data.description,
    discount: data.discount,
    salesPerson: data.salesPerson,
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
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: params,
      })
      .then((response) => {
        Swal.fire("Created!", "New order created.", "success");
        dispatch({
          type: salesConstants.ORDER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch({
          type: salesConstants.ORDER_FAILURE,
          payload: error.response.data,
        });
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
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: salesConstants.COMPANY_GETALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: salesConstants.COMPANY_GETALL_FAILURE,
          payload: error.response.data.errors,
        });
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
        dispatch({
          type: salesConstants.ITEM_GETALL_FAILURE,
          payload: error.response.data.errors,
        });
      });
  };
}
const actions = {
  createOrder,
  getAllCompany,
  getAllItem,
};

export default actions;
