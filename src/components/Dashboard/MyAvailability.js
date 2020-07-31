import React from "react";
import moment from "moment";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import MultipleDatesPicker from "@randex/material-ui-multiple-dates-picker";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
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
  const [open, setOpen] = useState(false);
  const [selectedDates, set_selectedDates] = useState([]);
  const onCancel = () => setOpen(false);
  const onSubmit = (dates) => {
    set_selectedDates(dates);
    setOpen(false);
  };

  console.log("What's selected dates?", selectedDates);

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
        <div className={classes.chartContainer}>
          <div>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setOpen(!open)}
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
    </Card>
  );
}
