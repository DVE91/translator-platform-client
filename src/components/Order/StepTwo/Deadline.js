import React from "react";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { datesAdded } from "../../../store/order/actions";
import { selectOrder } from "../../../store/order/selectors";

export default function Deadline() {
  const dispatch = useDispatch();
  const [date, set_Date] = useState(moment());

  const order = useSelector(selectOrder);
  const wordCount = order.wordCount;
  const defaultDeadline = moment().add(48, "hours").format();

  //option to disable weekends in deadline selector field
  // function disableWeekends(date) {
  //   return date.getDay() === 0 || date.getDay() === 6 || new Date() === date;
  // }

  const dateChangeHandler = (dates) => {
    set_Date(dates);
    dispatch(datesAdded({ start: moment(), end: dates }));
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <>
        <h5>1. Choose the deadline</h5>
        <KeyboardDatePicker
          disablePast={true}
          minDate={
            wordCount > 4000 && wordCount <= 6000
              ? moment().add(72, "hours").format()
              : wordCount > 6000 && wordCount <= 8000
              ? moment().add(96, "hours").format()
              : wordCount > 8000
              ? moment().add(120, "hours").format()
              : defaultDeadline
          }
          // shouldDisableDate={disableWeekends}
          margin="normal"
          id="date-picker-dialog"
          format="DD/MM/YYYY"
          value={date}
          onChange={dateChangeHandler}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </>
    </MuiPickersUtilsProvider>
  );
}
