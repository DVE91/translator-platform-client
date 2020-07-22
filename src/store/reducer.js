import { combineReducers } from "redux";
import UserSliceReducer from "./user/reducer";
import OrderSliceReducer from "./order/reducer";

const reducer = combineReducers({
  user: UserSliceReducer,
  order: OrderSliceReducer,
});

export default reducer;
