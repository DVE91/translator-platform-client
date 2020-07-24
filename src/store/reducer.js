import { combineReducers } from "redux";
import UserSliceReducer from "./user/reducer";
import OrderSliceReducer from "./order/reducer";
import TranslationSliceReducer from "./translation/reducer";

const reducer = combineReducers({
  user: UserSliceReducer,
  order: OrderSliceReducer,
  translation: TranslationSliceReducer,
});

export default reducer;
