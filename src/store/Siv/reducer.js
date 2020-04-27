import { GET_SIV } from "../../constant/constants";
const initialState = {
  sivs: [],
  siv_item: [],
};

export default function sivReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SIV:
      return {
        ...state,
        sivs: action.payload,
        siv_item: action.payload.siv_item,
      };

    default:
      return state;
  }
}
