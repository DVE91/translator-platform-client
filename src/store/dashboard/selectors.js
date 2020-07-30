export const selectJobs = (reduxState) => reduxState.dashboard.jobs;

export const selectProfile = (reduxState) => reduxState.dashboard.profile;

export const selectSkills = (reduxState) => reduxState.dashboard.skills;

export const selectBalance = (reduxState) => reduxState.dashboard.balance;

export const selectCentsPerWord = (reduxState) =>
  reduxState.dashboard.centsPerWord;
