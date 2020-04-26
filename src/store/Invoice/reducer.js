import { GET_INVOICE } from "../../constant/constants";
const initialState = {
  invoices: [],
  invoice_item: [],
};

export default function invoiceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INVOICE:
      console.log(action.payload);
      return {
        ...state,
        invoices: action.payload,
        invoice_item: action.payload.invoice_item,
      };

    default:
      return state;
  }
}
