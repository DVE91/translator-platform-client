import { apiUrl } from "../../config/constants";
import axios from "axios";

export const jobsFetched = (jobs) => {
  return {
    type: "JOBS_FETCHED",
    payload: jobs,
  };
};

export const skillsFetched = (skills) => {
  return {
    type: "SKILLS_FETCHED",
    payload: skills,
  };
};

export const profileFetched = (profile) => {
  return {
    type: "PROFILE_FETCHED",
    payload: profile,
  };
};

export const fetchProfile = (userId) => {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const id = userId;

    try {
      const response = await axios.get(`${apiUrl}/user/${id}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const profile = response.data.profile;
      dispatch(profileFetched(profile));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const fetchSkills = (userId) => {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const id = userId;

    try {
      const response = await axios.get(`${apiUrl}/user/${id}/skills`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const skills = response.data.skills;
      dispatch(skillsFetched(skills));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const fetchJobs = (userId) => {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const id = userId;

    try {
      const response = await axios.get(`${apiUrl}/user/${id}/jobs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jobs = response.data.jobs;
      dispatch(jobsFetched(jobs));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const updateJob = (translatedDocument, submitted, userId, jobId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    try {
      const response = await axios.patch(
        `${apiUrl}/user/${userId}/jobs/${jobId}`,
        {
          translatedDocument,
          submitted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const jobs = response.data.jobs;
      dispatch(jobsFetched(jobs));
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
