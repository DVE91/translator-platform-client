import { apiUrl } from "../../config/constants";
import axios from "axios";

export const appLoading = () => ({ type: "APP_LOADING" });
export const appDoneLoading = () => ({ type: "APP_DONE_LOADING" });
export const showMessage = () => ({ type: "SHOW_MESSAGE" });
export const hideMessage = () => ({ type: "HIDE_MESSAGE" });
