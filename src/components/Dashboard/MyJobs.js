import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import WorkOutlineRoundedIcon from "@material-ui/icons/WorkOutlineRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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

  return (
    <Card className={classes.root}>
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
        <div className={classes.chartContainer}></div>
      </CardContent>
    </Card>
  );
}
