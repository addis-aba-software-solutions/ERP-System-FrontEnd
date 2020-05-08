import { GET_ORDER, UPDATE_ORDER, GET_SINGLE_ORDER, GET_STATUS, UPDATE_STATUS, errorsConstant } from "../../constant/constants";
const initialState = {
  orders: [],
  status: {},
  order: [],
  items: [],
  success: false,
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case errorsConstant.GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_SINGLE_ORDER:
      return {
        ...state,
        order: action.payload,
        items: action.payload.item_order ? action.payload.item_order : [],
      };
    case GET_ORDER: {
      return {
        ...state,
        orders: action.payload,
      };
    }

    case UPDATE_ORDER: {
      return {
        ...state,
        orders: state.orders,

      };
    }
    case GET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case UPDATE_STATUS: {
      const index = state.orders.findIndex(
        (item) => item.orderNumber === action.payload.order
      );
      state.orders[index].status = action.payload.status;
      return {
        ...state,
        success: true,
        orders: state.orders,
        order: state.order,
        status: action.payload,
      };
    }
    default:
      return state;
  }
}
