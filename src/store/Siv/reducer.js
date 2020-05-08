import { GET_SIV, UPDATE_SIV, errorsConstant } from "../../constant/constants";
const initialState = {
  sivs: [],
  siv_item: [],
  success: false,
};

export default function sivReducer(state = initialState, action) {
  switch (action.type) {
    case errorsConstant.GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_SIV:
      return {
        ...state,
        sivs: action.payload,
        success: true,
        siv_item: action.payload.siv_item,

      };
    case UPDATE_SIV: {
      state.sivs.sivStatus = action.payload.status;
      return {
        ...state,
        sivs: state.sivs,
        success: true
      };
    }

    default:
      return state;
  }
}
