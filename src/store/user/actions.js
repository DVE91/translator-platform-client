import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { showError } from "../appState/actions";

export const orderName = (userName) => {
  return {
    type: "ORDER_NAME_SET",
    payload: userName,
  };
};

export const orderEmail = (userEmail) => {
  return {
    type: "ORDER_EMAIL_SET",
    payload: userEmail,
  };
};

export const loginSuccess = (userWithToken) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: "TOKEN_STILL_VALID",
  payload: userWithoutToken,
});

export const logOut = () => ({ type: "LOG_OUT" });

//login (both for customers and translators)
export const login = (emailAddress, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        emailAddress,
        password,
      });

      dispatch(loginSuccess(response.data));
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

//sign up customer / normal sign up
export const signUp = (fullName, emailAddress, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        fullName,
        emailAddress,
        password,
      });
      dispatch(loginSuccess(response.data));
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

///signup/translator
export const signUpTranslator = (
  fullName,
  emailAddress,
  password,
  imageUrl,
  experience,
  writingStyle
) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/signup/translator`, {
        fullName,
        emailAddress,
        password,
        imageUrl,
        experience,
        writingStyle,
      });
      dispatch(loginSuccess(response.data));
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

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
    } catch (error) {
      console.log(error.response.message);

      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
    }
  };
};
