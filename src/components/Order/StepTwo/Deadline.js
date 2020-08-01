import React from "react";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import { useState, useEffect } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch, useSelector } from "react-redux";
import { datesAdded } from "../../../store/order/actions";
import { selectOrder } from "../../../store/order/selectors";

export default function Deadline() {
  const [date, set_Date] = useState(moment());
  const [minimumDate, set_minimumDate] = useState(
    moment().add(2, "days").format()
  );
  const [tooManywords, set_tooManyWords] = useState(false);
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  const wordCount = order.wordCount;

  //option to disable weekends in deadline selector field
  // function disableWeekends(date) {
  //   return date.getDay() === 0 || date.getDay() === 6 || new Date() === date;
  // }

  useEffect(() => {
    dispatch(datesAdded({ start: moment(), end: date }));
  }, [dispatch, date]);

  const dateChangeHandler = (dates) => {
    set_Date(dates);
  };

  console.log("what date", date);
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <>
        <h5>1. Choose the deadline</h5>
        {tooManywords ? (
          <div>
            <br />
            <h6>
              Those are a lot of words to translate! Please do select a deadline
              but keep in mind that the translator might get in touch with you
              to discuss feasible deadline options.{" "}
            </h6>
            <br />
          </div>
        ) : null}
        <KeyboardDatePicker
          disablePast={true}
          minDate={minimumDate}
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
