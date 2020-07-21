import { combineReducers } from "redux";
import UserSliceReducer from "./user/reducer";

const reducer = combineReducers({
  user: UserSliceReducer,
});

export default reducer;
