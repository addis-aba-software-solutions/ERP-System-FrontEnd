import { GET_INVOICE, errorsConstant } from "../../constant/constants";
const initialState = {
  invoices: [],
  invoice_item: [],
};
export default function invoiceReducer(state = initialState, action) {

  switch (action.type) {
    case errorsConstant.GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case "GET_INVOICE":
      return {
        ...state,
        invoices: action.payload.siv,
        invoice_item: action.payload.siv_item,
      };
    default:
      return state;
  }
}
