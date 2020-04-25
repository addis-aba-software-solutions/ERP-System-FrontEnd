import { GET_SIV } from "../../constant/constants";
const initialState = {
  siv: {},
};

export default function invoiceReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SIV:
      return {
        ...state,
        siv: action.payload,
      };

    default:
      return state;
  }
}
