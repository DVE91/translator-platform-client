import { apiUrl } from "../../config/constants";
import axios from "axios";
import { showError } from "../appState/actions";

export function languagesFetched(languages) {
  return {
    type: "LANGUAGES_FETCHED",
    payload: languages,
  };
}

export function profilesFetched(profiles) {
  return {
    type: "PROFILES_FETCHED",
    payload: profiles,
  };
}

export const fetchLanguages = () => {
  return async function (dispatch, getState) {
    const response = await axios.get(`${apiUrl}/languages`);
    const languages = response.data.languages.rows;
    dispatch(languagesFetched(languages));
  };
};

export const fetchProfiles = (originalLanguage, nativeLanguage) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/translators?originalLanguage=${originalLanguage}&nativeLanguage=${nativeLanguage}`
      );
      dispatch(profilesFetched(response.data.profiles.rows));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(showError());
      } else {
        console.log(error.message);
        dispatch(showError());
      }
    }
  };
};
