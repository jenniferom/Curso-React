import { TAction } from "./actions";
import { HomeStateType } from "./initialState";

const reducer = (state: HomeStateType, action: TAction): HomeStateType => {
  const { type } = action;
  switch (type) {
    case "SET_POST":
      return 

    case "ADD_TASK":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_TASK":
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };
    case "TOGGLE_COMPLETE_TASK":
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (index === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
export default reducer;