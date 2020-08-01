export const selectJobs = (reduxState) => reduxState.dashboard.jobs;

export const selectProfile = (reduxState) => reduxState.dashboard.profile;

export const selectSkills = (reduxState) => reduxState.dashboard.skills;

export const selectFinances = (reduxState) => reduxState.dashboard.finances;

export const selectAvailability = (reduxState) =>
  reduxState.dashboard.availability;
