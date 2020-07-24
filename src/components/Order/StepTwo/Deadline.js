import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch } from "react-redux";
import { datesAdded } from "../../../store/order/actions";

export default function Deadline() {
  const [date, set_Date] = useState(new Date());
  const dispatch = useDispatch();

  console.log("Whats date?", date);

  const dateChangeHandler = (date) => {
    set_Date(date);
    dispatch(datesAdded({ start: new Date(), end: date }));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <h5>1. Choose the deadline</h5>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        format="MM/dd/yyyy"
        value={date}
        onChange={dateChangeHandler}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
