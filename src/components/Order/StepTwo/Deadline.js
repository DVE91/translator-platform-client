import React from "react";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { datesAdded } from "../../../store/order/actions";
import { selectOrder } from "../../../store/order/selectors";

export default function Deadline() {
  const [date, set_Date] = useState(new Date());
  const [tooManywords, set_tooManyWords] = useState(false);
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);

  //option to disable weekends in deadline selector
  // function disableWeekends(date) {
  //   return date.getDay() === 0 || date.getDay() === 6 || new Date() === date;
  // }

  const dateChangeHandler = (date) => {
    set_Date(date);
    dispatch(datesAdded({ start: new Date(), end: date }));
  };

  function deadlineRegulator() {
    if (order.wordCount <= 4000) {
      return moment(new Date()).add(2, "days");
    } else if (order.wordCount > 4000 && order.wordcount <= 6000) {
      return moment(new Date()).add(3, "days");
    } else if (order.wordCount > 6000 && order.wordcount <= 8000) {
      return moment(new Date()).add(4, "days");
    } else if (order.wordCount > 8000 && order.wordcount <= 10000) {
      return moment(new Date()).add(5, "days");
    } else {
      set_tooManyWords(true);
      return moment(new Date()).add(6, "days");
    }
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <h5>1. Choose the deadline</h5>
      {tooManywords ? (
        <div>
          <br />
          <h6>
            Those are a lot of words to translate! Please do select a deadline
            but keep in mind that the translator might get in touch with you to
            discuss feasible deadline options.{" "}
          </h6>
          <br />
        </div>
      ) : null}
      <KeyboardDatePicker
        disablePast={true}
        minDate={deadlineRegulator()}
        // shouldDisableDate={disableWeekends}
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
