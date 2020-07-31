const initialState = {
  jobs: [],
  profile: {},
  skills: [],
  availability: [],
  finances: {},
};

export default function DashboardSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "JOBS_FETCHED":
      return { ...state, jobs: action.payload };
    case "PROFILE_FETCHED":
      return { ...state, profile: action.payload };
    case "FINANCES_FETCHED":
      return { ...state, finances: action.payload };
    case "SKILLS_FETCHED":
      return { ...state, skills: action.payload };
    case "SKILL_DELETED":
      const skillId = action.payload;
      const newSkills = state.skills.filter((skill) => skill.id !== skillId);
      return { ...state, skills: newSkills };
    default:
      return state;
  }
}
