const initialState = {
  jobs: [],
  profile: {},
};

export default function DashboardSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "JOBS_FETCHED":
      return { ...state, jobs: action.payload };
    case "PROFILE_FETCHED":
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}
