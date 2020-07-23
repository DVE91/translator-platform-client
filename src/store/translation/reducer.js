const initialState = {
  languages: [],
  profiles: [],
};

export default function TranslationSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "LANGUAGES_FETCHED":
      return { ...state, languages: action.payload };
    default:
      return state;
  }
}
