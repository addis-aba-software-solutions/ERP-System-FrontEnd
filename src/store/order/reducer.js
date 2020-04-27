import { GET_ORDER, GET_STATUS, UPDATE_STATUS } from "../../constant/constants";
const initialState = {
  orders: [],
  status: {},
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER:
 
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
        status: state.status.map((status) =>
          status.orderNumber === action.payload.orderNumber
            ? [...status, action.payload.data]
            : status
        ),
      };

    default:
      return state;
  }
}
