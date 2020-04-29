import { GET_ORDER, GET_SINGLE_ORDER, GET_STATUS, UPDATE_STATUS, errorsConstant } from "../../constant/constants";
const initialState = {
  orders: [],
  status: {},
  order: [],
  items: []
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
    case GET_ORDER:
      console.log(action.payload);

      return {
        ...state,
        orders: action.payload,

      };
    case GET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        // orders: state.orders.map((order) =>
        //   order.orderNumber === action.payload.orderNumber
        //     ? [...order, action.payload.data]
        //     : order
        // ),
        status: action.payload,
      };

    default:
      return state;
  }
}
