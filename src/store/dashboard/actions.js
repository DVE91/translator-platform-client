import { apiUrl, defaultPaginationLimit } from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";

export function jobsFetched(jobs) {
  return {
    type: "JOBS_FETCHED",
    payload: jobs,
  };
}

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
