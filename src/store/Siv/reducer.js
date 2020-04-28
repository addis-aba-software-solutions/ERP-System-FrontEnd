import { GET_SIV, UPDATE_SIV } from "../../constant/constants";
const initialState = {
  sivs: [],
  siv_item: [],
};

export default function sivReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SIV:
      console.log(action.payload);
      return {
        ...state,
        sivs: action.payload,
        siv_item: action.payload.siv_item,
       
      };
      case UPDATE_SIV:
        return {
          ...state,
          sivs: action.payload.data,
        };

    default:
      return state;
  }
}
