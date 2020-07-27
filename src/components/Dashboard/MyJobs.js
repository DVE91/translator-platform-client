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

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 600,
    position: "relative",
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

  return (
    <div>
      {" "}
      {!jobs ? (
        <p>Loading...</p>
      ) : (
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
            <CardContent>
              <div className={classes.chartContainer}>
                {jobs.map((job) => (
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
          </Card>
        </div>
      )}
    </div>
  );
}
