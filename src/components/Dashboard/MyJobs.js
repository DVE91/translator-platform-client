import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../store/dashboard/actions";
import { selectJobs } from "../../store/dashboard/selectors";
import { selectUser } from "../../store/user/selectors";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import JobFeed from "./JobFeed";
import Loading from "../Loading";

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 600,
    position: "relative",
    overflow: "auto",
  },
  actions: {
    justifyContent: "flex-end",
  },
  avatar: {
    backgroundColor: "lightblue",
  },
}));

export default function MyJob() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchJobs(user.id));
  }, [dispatch, user.id]);

  const sortedDeadline = [...jobs].sort(function (a, b) {
    return new Date(a.endDate) - new Date(b.endDate);
  });
  const sortedDeadlineAndSubmitted = [...sortedDeadline].sort(function (a, b) {
    return a.submitted - b.submitted;
  });

  return (
    <div>
      {" "}
      <div>
        <Card className={classes.root} raised={true}>
          <CardHeader
            title={
              <Typography gutterBottom component="h2" variant="button">
                My Jobs
              </Typography>
            }
            avatar={
              <Avatar aria-label="jobs" className={classes.avatar}>
                <WorkOutlineRoundedIcon />
              </Avatar>
            }
          />
          <Divider />
          {jobs.length === 0 ? (
            <div>
              <Loading />
              no jobs yet
            </div>
          ) : (
            <CardContent>
              <div className={classes.chartContainer}>
                {sortedDeadlineAndSubmitted.map((job) => (
                  <JobFeed
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    type={job.type}
                    deadline={job.endDate}
                    translatedDocument={job.translatedDocument}
                    wordCount={job.wordCount}
                    submitted={job.submitted}
                  />
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
