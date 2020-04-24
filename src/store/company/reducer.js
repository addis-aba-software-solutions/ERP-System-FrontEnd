import { companyConstant } from "../../constant/constants";
const initialState = {
  companys: [],
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case companyConstant.GET_COMPANYS:
      return {
        ...state,
        companys: action.payload,
      };

    case companyConstant.ADD_COMPANY:
      return {
        ...state,
        companys: [...state.companys, action.payload],
      };

    default:
      return state;
  }
}
