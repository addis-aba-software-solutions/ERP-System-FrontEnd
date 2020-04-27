import { GET_INVOICE } from "../../constant/constants";
const initialState = {
  invoices: [],
  invoice_item: [],
};

export default function invoiceReducer(state = initialState, action) {
console.log(action.payload)
  switch (action.type) {
    case GET_INVOICE:
      return {
        ...state,
        invoices: action.payload,
        invoice_item: action.payload.invoice_item,
      };

    default:
      return state;
  }
}
