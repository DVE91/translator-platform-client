import { apiUrl, defaultPaginationLimit } from "../../config/constants";
import axios from "axios";

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

export const fetchProfiles = () => {
  return async (dispatch, getState) => {
    const profilesCount = getState().translation.profiles.length;
    const response = await axios.get(
      `${apiUrl}/translators?limit=${defaultPaginationLimit}&offset=${profilesCount}`
    );
    dispatch(profilesFetched(response.data.profiles.rows));
  };
};
