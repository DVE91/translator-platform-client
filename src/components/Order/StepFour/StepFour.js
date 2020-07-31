import React from "react";
import mooment from "moment";
import AccountDetails from "./AccountDetails";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../../store/user/selectors";
import { selectOrder } from "../../../store/order/selectors";

export default function StepFour() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const order = useSelector(selectOrder);

  return (
    <div>
      <h5>Finishing up</h5>
      {token !== null ? (
        <div>
          <h5>Your order</h5>
          <h6>details:</h6>
          <p>document title: {order.title}</p>
          <p>document type: {order.type}</p>

          <h6></h6>
        </div>
      ) : (
        <AccountDetails />
      )}
    </div>
  );
}
