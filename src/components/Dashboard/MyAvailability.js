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
import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded";
import Loading from "../Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "25px",
  },
  chartContainer: {
    height: 230,
    position: "relative",
  },
  actions: {
    justifyContent: "flex-end",
  },
  avatar: {
    backgroundColor: "pink",
  },
}));

export default function MyAvailability() {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            My availability
          </Typography>
        }
        avatar={
          <Avatar aria-label="calendar" className={classes.avatar}>
            <EventAvailableRoundedIcon />
          </Avatar>
        }
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>*TO DO</div>
      </CardContent>
    </Card>
  );
}
