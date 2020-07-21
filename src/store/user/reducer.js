const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export const TEST_ACTION = "TEST_ACTION";

const test = (test) => ({
  type: TEST_ACTION,
  payload: test,
});

export default function UserSliceReducer(state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION:
      return { ...state };
    // case LOGIN_SUCCESS:
    //   localStorage.setItem("token", action.payload.token);
    //   return { ...state, ...action.payload };

    // case LOG_OUT:
    //   localStorage.removeItem("token");
    //   return { ...initialState, token: null };

    // case TOKEN_STILL_VALID:
    //   return { ...state, ...action.payload };

    default:
      return state;
  }
}
