import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import {
  selectBalance,
  selectCentsPerWord,
} from "../../store/dashboard/selectors";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import LocalAtmRoundedIcon from "@material-ui/icons/LocalAtmRounded";

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 230,
    position: "relative",
  },
  actions: {
    justifyContent: "flex-end",
  },
  avatar: {
    backgroundColor: "lightgreen",
  },
}));

export default function MyFinances() {
  const classes = useStyles();
  const balance = useSelector(selectBalance);
  const centsPerWord = useSelector(selectCentsPerWord);
  const [rate, set_rate] = useState(centsPerWord);

  console.log("CPW", centsPerWord, "balance,", balance);

  return (
    <Card className={classes.root} raised={true}>
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            My finances
          </Typography>
        }
        avatar={
          <Avatar aria-label="finances" className={classes.avatar}>
            <LocalAtmRoundedIcon />
          </Avatar>
        }
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <div>
            <h6> MY BALANCE: €{balance}</h6>
            <Button variant="contained" color="secondary" size="large">
              PAYOUT
            </Button>
            <br />
          </div>
          <div style={{ marginTop: "40px" }}>
            <div>
              <TextField
                style={{ width: "100px" }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
                value={rate}
                onChange={(event) => set_rate(event.target.value)}
                variant="outlined"
                type="text"
              />
              <Button variant="outlined" color="primary" size="medium">
                save
              </Button>
            </div>
            <div>
              standard fee <br />
              (cents per word)
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
