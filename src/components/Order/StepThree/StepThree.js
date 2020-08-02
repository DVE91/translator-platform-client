import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  fetchPricing,
  totalPrice,
  invoicePaid,
} from "../../../store/payment/actions";
import { selectPricing } from "../../../store/payment/selectors";
import { selectOrder } from "../../../store/order/selectors";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import Loading from "../../Loading";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 12,
    padding: "30px",
  },
});

export default function StepThree() {
  const dispatch = useDispatch();
  const pricing = useSelector(selectPricing);
  const order = useSelector(selectOrder);
  const wordCount = order.wordCount;
  const classes = useStyles();

  const [paid, set_paid] = useState(false);
  const price = wordCount * pricing;

  const quoteInterval = 1000;
  useEffect(() => {
    setTimeout(() => dispatch(fetchPricing(order.profileId)), quoteInterval);
  }, [dispatch, price]);

  console.log("price?", price);

  if (paid) {
    dispatch(totalPrice(price));
    dispatch(invoicePaid(true));
  } else if (!paid) {
    dispatch(invoicePaid(false));
  }

  return (
    <div className="step">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Tone of Choice
          </Typography>
          <DescriptionOutlinedIcon />
          <Typography variant="h5" component="h2">
            Your quote: <br />
          </Typography>
          {price > 0 ? (
            <Typography variant="body1" component="p">
              <br />
              <h6>total price: € {price}</h6>
              <br />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={paid}
                      onChange={() => set_paid(!paid)}
                      name="checkPayment"
                    />
                  }
                  label="Send me a 'Tikkie' and I'll pay it straight away. Promise!"
                />
              </FormGroup>
            </Typography>
          ) : (
            <Loading />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
