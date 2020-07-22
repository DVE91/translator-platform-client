const initialState = {
  title: null,
  type: null,
  wordCount: null,
  orginalLanguage: null,
  nativeLanguage: null,
  originalDocument: null,
};

export default function OrderSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "TRANSLATION_DOCUMENT_UPLOADED":
      return { ...state, originalDocument: action.payload };
    case "TITLE_ADDED":
      return { ...state, title: action.payload };
    default:
      return state;
  }
}
