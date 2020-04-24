import { errorsConstant } from "../../constant/constants";
const initialState = {
  errors: [],
};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case errorsConstant.GET_ERRORS:
      console.log("error comming");
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
}
