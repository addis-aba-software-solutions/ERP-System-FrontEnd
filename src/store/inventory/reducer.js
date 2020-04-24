import { inventoryConstant } from "../../constant/constants";
const initialState = {
  items: [],
};

export default function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case inventoryConstant.GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case inventoryConstant.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };

    case inventoryConstant.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.InventoryItemId !== action.payload
        ),
        loading: false,
      };

    default:
      return state;
  }
}
