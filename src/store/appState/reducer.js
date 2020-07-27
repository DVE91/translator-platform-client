const initialState = {
  loading: false,
  showMessage: false,
};

export default function TranslationSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "APP_LOADING":
      return { ...state, loading: true };
    case "APP_DONE_LOADING":
      return { ...state, loading: false };
    case "SHOW_MESSAGE":
      return { ...state, showMessage: true };
    case "HIDE_MESSAGE":
      return { ...state, showMessage: false };
    default:
      return state;
  }
}
