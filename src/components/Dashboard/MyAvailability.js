import React from "react";
import moment from "moment";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAvailability,
  updateAvailability,
  clearAvailability,
} from "../../store/dashboard/actions";
import { selectAvailability } from "../../store/dashboard/selectors";
import { selectUser } from "../../store/user/selectors";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import MultipleDatesPicker from "@randex/material-ui-multiple-dates-picker";
import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded";
import Loading from "../Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "25px",
  },
  chartContainer: {
    height: 230,
    position: "center",
    flexGrow: 1,
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
  const dispatch = useDispatch();
  const availability = useSelector(selectAvailability);
  const user = useSelector(selectUser);
  const formattedDates = [...availability].map((date) => new Date(date));

  const [open, setOpen] = useState(false);
  const [selectedDates, set_selectedDates] = useState(formattedDates);

  const onCancel = () => setOpen(false);
  const onSubmit = async (dates) => {
    setOpen(false);
    const convertedDates = dates.map((date) =>
      moment(date).format("YYYY-MM-DD")
    );
    await dispatch(clearAvailability(user.id));
    convertedDates.map((date) => dispatch(updateAvailability(date, user.id)));
  };

  useEffect(() => {
    dispatch(fetchAvailability(user.id));
  }, [user.id]);

  console.log("ok now right?");

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
      {!formattedDates || !user.id ? (
        <Loading />
      ) : (
        <CardContent>
          <div className={classes.chartContainer}>
            <div>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(!open);
                  set_selectedDates(formattedDates);
                }}
              >
                update availability
              </Button>
              <MultipleDatesPicker
                open={open}
                selectedDates={selectedDates}
                onCancel={onCancel}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
