import React from "react";
import moment from "moment";
import AccountDetails from "./AccountDetails";
import { useSelector } from "react-redux";
import { selectToken } from "../../../store/user/selectors";
import { selectOrder } from "../../../store/order/selectors";

export default function StepFour() {
  const token = useSelector(selectToken);
  const order = useSelector(selectOrder);

  return (
    <div>
      <h5>Finishing up</h5>
      {token !== null ? (
        <div>
          <h6>Your order details:</h6>

          <p>
            We're going to deliver one translation for your document{" "}
            <strong>'{order.title}'</strong>
          </p>
          <p>
            We will be delivering this on or before the deadline of{" "}
            <strong> {moment(order.endDate).format("ddd MMM D YYYY")} </strong>
          </p>

          <p>
            Please click 'confirm' to place your order. Thank you for choosing
            us!
          </p>
        </div>
      ) : (
        <AccountDetails />
      )}
    </div>
  );
}
