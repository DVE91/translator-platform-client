import { apiUrl } from "../../config/constants";
import axios from "axios";
import { showError, showMessage } from "../appState/actions";

export function documentUploaded(file) {
  return {
    type: "TRANSLATION_DOCUMENT_UPLOADED",
    payload: file,
  };
}

export function titleAdded(title) {
  return {
    type: "TITLE_ADDED",
    payload: title,
  };
}

export function typeAdded(type) {
  return {
    type: "TYPE_ADDED",
    payload: type,
  };
}

export function datesAdded(date) {
  return {
    type: "DATES_ADDED",
    payload: date,
  };
}

export function originalLanguageAdded(oldLanguage) {
  return {
    type: "ORIGINAL_LANGUAGE_ADDED",
    payload: oldLanguage,
  };
}

export function nativeLanguageAdded(newLanguage) {
  return {
    type: "NATIVE_LANGUAGE_ADDED",
    payload: newLanguage,
  };
}

export function profileAdded(id) {
  return {
    type: "PROFILE_ADDED",
    payload: id,
  };
}

export const createOrder = () => {
  return async (dispatch, getState) => {
    const newJob = getState().order;
    const user = getState().user;
    const payment = getState().payment;
    try {
      const response = await axios.post(`${apiUrl}/user/order`, {
        ...newJob,
        ...user,
        ...payment,
      });
      console.log(response);
      dispatch(showMessage());
    } catch (error) {
      console.log(error.response.data.message);
      dispatch(showError());
    }
  };
};
