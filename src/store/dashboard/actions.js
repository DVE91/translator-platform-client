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

export const skillDeleted = (skillId) => {
  return {
    type: "SKILL_DELETED",
    payload: skillId,
  };
};

export const profileFetched = (profile) => {
  return {
    type: "PROFILE_FETCHED",
    payload: profile,
  };
};

export const financesFetched = (finance) => {
  return {
    type: "FINANCES_FETCHED",
    payload: finance,
  };
};

export const availabilityFetched = (availability) => {
  return {
    type: "AVAILABILITY_FETCHED",
    payload: availability,
  };
};

export const availabilityCleared = () => {
  return {
    type: "AVAILABILITY_CLEARED",
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

export const fetchAvailability = (userId) => {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const id = userId;

    try {
      const response = await axios.get(`${apiUrl}/user/${id}/availability`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const availability = response.data.availability;
      dispatch(availabilityFetched(availability));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const clearAvailability = (userId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const id = userId;
    try {
      await axios.delete(`${apiUrl}/user/${id}/availability`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(availabilityCleared());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const updateAvailability = (dates, userId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const id = userId;
    try {
      const response = await axios.post(
        `${apiUrl}/user/${id}/availability/`,
        {
          dates,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const idResponse = response.data.id;
      dispatch(fetchAvailability(idResponse));
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const fetchFinances = (userId) => {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const id = userId;

    try {
      const response = await axios.get(`${apiUrl}/user/${id}/finance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const finances = response.data.finances;
      dispatch(financesFetched(finances));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const updateFinances = (centsPerWord, userId, financeId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    try {
      const response = await axios.patch(
        `${apiUrl}/user/${userId}/finance/${financeId}`,
        {
          centsPerWord,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const finances = response.data.finances;
      dispatch(financesFetched(finances));
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};

export const updateCurrentBalance = (gainings, userId, financeId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const id = userId;

    try {
      const financeResponse = await axios.get(`${apiUrl}/user/${id}/finance`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const financeOverview = financeResponse.data.finances;
      const newBalance = financeOverview.currentBalance + gainings;

      const response = await axios.patch(
        `${apiUrl}/user/${userId}/finance/${financeId}`,
        {
          currentBalance: newBalance,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const finances = response.data.finances;
      dispatch(financesFetched(finances));
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.message);
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

export const addSkill = (originalLanguage, nativeLanguage, userId) => {
  return async function (dispatch, getState) {
    const token = getState().user.token;
    const id = userId;

    try {
      const response = await axios.post(
        `${apiUrl}/user/${id}/skills`,
        {
          originalLanguage,
          nativeLanguage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

export const deleteSkill = (skillId) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const id = getState().user.id;
    try {
      await axios.delete(`${apiUrl}/user/${id}/skills/${skillId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(skillDeleted(skillId));
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
