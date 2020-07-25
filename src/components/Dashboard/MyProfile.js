import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
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
}));

export default function MyProfile() {
  const classes = useStyles();
  const user = useSelector(selectUser);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            My profile
          </Typography>
        }
        avatar={<Avatar alt="profile icon" src={user.imageUrl} />}
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>*TO DO</div>
      </CardContent>
    </Card>
  );
}
