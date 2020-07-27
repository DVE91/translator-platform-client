import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/dashboard/actions";
import { selectProfile } from "../../store/dashboard/selectors";
import { makeStyles } from "@material-ui/styles";
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

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 600,
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  actions: {
    justifyContent: "flex-end",
  },
}));

export default function MyProfile() {
  const classes = useStyles();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    dispatch(fetchProfile(user.id));
  }, [dispatch, user.id]);

  console.log("WHATS PROIFLE?", profile);
  return (
    <Card className={classes.root} raised={true}>
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
        <div className={classes.chartContainer}>
          <div className="profileItem">
            <h5>My writing style</h5>
            <p>{profile.writingStyle}</p>
          </div>
          <div className="profileItem">
            <h5>My experience</h5>
            <p>{profile.experience}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
