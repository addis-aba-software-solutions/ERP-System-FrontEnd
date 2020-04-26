import { GET_ORDER, GET_STATUS } from "../../constant/constants";
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

    default:
      return state;
  }
}
