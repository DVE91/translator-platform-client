import { apiUrl } from "../../config/constants";
import axios from "axios";

export function languagesFetched(languages) {
  return {
    type: "LANGUAGES_FETCHED",
    payload: languages,
  };
}

export const fetchLanguages = () => {
  return async function (dispatch, getState) {
    const response = await axios.get(`${apiUrl}/languages`);
    const languages = response.data.languages.rows;
    dispatch(languagesFetched(languages));
  };
};
