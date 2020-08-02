const initialState = {
  token: localStorage.getItem("token"),
  fullName: null,
  emailAddress: null,
};

export default function UserSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ORDER_NAME_SET":
      return { ...state, fullName: action.payload };
    case "ORDER_EMAIL_SET":
      return { ...state, emailAddress: action.payload };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    case "TOKEN_STILL_VALID":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
