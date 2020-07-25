import { apiUrl, defaultPaginationLimit } from "../../config/constants";
import axios from "axios";

export function jobsFetched(jobs) {
  return {
    type: "JOBS_FETCHED",
    payload: jobs,
  };
}

export const fetchJobs = () => {
  return async function (dispatch, getState) {
    const id = getState().user.id;
    const response = await axios.get(`${apiUrl}/user/${id}/jobs`);
    const jobs = response.data.jobs.rows;
    dispatch(jobsFetched(jobs));
  };
};
