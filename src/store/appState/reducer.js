const initialState = {
  showMessage: false,
  error: false,
};

export default function appStateSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return { ...state, showMessage: true };
    case "HIDE_MESSAGE":
      return { ...state, showMessage: false };
    case "SHOW_ERROR":
      return { ...state, error: true };
    case "HIDE_ERROR":
      return { ...state, error: false };
    default:
      return state;
  }
}
