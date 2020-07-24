const initialState = {
  profileId: null,
  title: null,
  type: null,
  wordCount: null,
  originalLanguage: null,
  nativeLanguage: null,
  originalDocument: null,
  startingDate: null,
  endDate: null,
};

export default function OrderSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "TRANSLATION_DOCUMENT_UPLOADED":
      return {
        ...state,
        originalDocument: action.payload.file,
        wordCount: action.payload.wordCount,
      };
    case "TITLE_ADDED":
      return { ...state, title: action.payload };
    case "TYPE_ADDED":
      return { ...state, type: action.payload };
    case "DATES_ADDED":
      return {
        ...state,
        startingDate: action.payload.start,
        endDate: action.payload.end,
      };
    case "ORIGINAL_LANGUAGE_ADDED":
      return { ...state, originalLanguage: action.payload };
    case "NATIVE_LANGUAGE_ADDED":
      return { ...state, nativeLanguage: action.payload };
    case "PROFILE_ADDED":
      return { ...state, profileId: action.payload };
    default:
      return state;
  }
}
