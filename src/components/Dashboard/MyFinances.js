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
import LocalAtmRoundedIcon from "@material-ui/icons/LocalAtmRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 230,
    position: "relative",
  },
  actions: {
    justifyContent: "flex-end",
  },
  avatar: {
    backgroundColor: "lightgreen",
  },
}));

export default function MyFinances() {
  const classes = useStyles();

  return (
    <Card className={classes.root} raised={true}>
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            My finances
          </Typography>
        }
        avatar={
          <Avatar aria-label="finances" className={classes.avatar}>
            <LocalAtmRoundedIcon />
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
