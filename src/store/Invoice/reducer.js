import { GET_INVOICE, errorsConstant } from "../../constant/constants";
const initialState = {
  invoices: [],
  invoice_item: [],
  success: false,
};
export default function invoiceReducer(state = initialState, action) {

  switch (action.type) {
    case errorsConstant.GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    case "SUCCESS":
      return {
        ...state,
        success: false,
      };
    case GET_INVOICE:
      return {
        ...state,
        invoices: action.payload,
        invoice_item: action.payload.invoice_item,
        success: true,
      };
    default: {
      return state;
    }
  }
}
