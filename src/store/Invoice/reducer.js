import { GET_INVOICE } from "../../constant/constants";
const initialState = {
  invoices: [],
};

export default function invoiceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INVOICE:
      return {
        ...state,
        invoices: action.payload,
      };

    default:
      return state;
  }
}
