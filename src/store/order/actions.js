import { apiUrl } from "../../config/constants";
import axios from "axios";

export function documentUploaded(file) {
  console.log("WHATS PAYLOAD DOC?", file);
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
  console.log("WHATS PROFILE PAYLOAD?", id);
  return {
    type: "PROFILE_ADDED",
    payload: id,
  };
}

export const createOrder = () => {
  return async (dispatch, getState) => {
    const newJob = getState().order;

    const response = await axios.post(`${apiUrl}/user/order`, {});

    console.log("WHATS RESPONSE?", response.data);
  };
};
