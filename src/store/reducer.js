import { combineReducers } from "redux";
import UserSliceReducer from "./user/reducer";
import OrderSliceReducer from "./order/reducer";
import TranslationSliceReducer from "./translation/reducer";
import DashboardSliceReducer from "./dashboard/reducer";

const reducer = combineReducers({
  user: UserSliceReducer,
  order: OrderSliceReducer,
  translation: TranslationSliceReducer,
  dashboard: DashboardSliceReducer,
});

export default reducer;
