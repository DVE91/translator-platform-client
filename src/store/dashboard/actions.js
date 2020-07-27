import { apiUrl, defaultPaginationLimit } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";

export function jobsFetched(jobs) {
  return {
    type: "JOBS_FETCHED",
    payload: jobs,
  };
}

export function profileFetched(profile) {
  return {
    type: "PROFILE_FETCHED",
    payload: profile,
  };
}

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
        //dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        //dispatch(setMessage("danger", true, error.message));
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
        //dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        //dispatch(setMessage("danger", true, error.message));
      }
    }
  };
};

export const updateJobTranslation = (translatedDocument) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    const id = getState().user.id;
    //dispatch(appLoading());

    console.log("Whats token", token);

    try {
      const response = await axios.patch(
        `${apiUrl}/user/3/jobs/5`,
        {
          translatedDocument,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //dispatch(
      //   showMessageWithTimeout("success", false, response.data.message, 3000)
      // );

      const jobs = response.data.jobs;
      dispatch(jobsFetched(jobs));
      //dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log("error", error.response.data.message);
        //dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        //dispatch(setMessage("danger", true, error.message));
      }
      //dispatch(appDoneLoading());
    }
  };
};
