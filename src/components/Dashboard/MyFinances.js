import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { fetchFinances, updateFinances } from "../../store/dashboard/actions";
import { selectFinances } from "../../store/dashboard/selectors";
import Loading from "../Loading";
import {
  Card,
  CardHeader,
  CardContent,
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
  const dispatch = useDispatch();
  const finances = useSelector(selectFinances);
  const user = useSelector(selectUser);
  const [rate, set_rate] = useState("");

  useEffect(() => {
    dispatch(fetchFinances(user.id));
  }, [dispatch, user.id]);

  const updateFee = () => {
    dispatch(updateFinances(rate, user.id, finances.id));
    set_rate("");
  };

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
      {user.id !== undefined ? (
        <CardContent>
          <div className={classes.chartContainer}>
            <div>
              <h6> MY BALANCE: €{finances.currentBalance}</h6>
              <Button
                onClick={() => console.log("Pay day!")}
                variant="contained"
                color="secondary"
                size="large"
              >
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
                  placeholder={`${finances.centsPerWord}`}
                />
                <Button
                  onClick={updateFee}
                  variant="outlined"
                  color="primary"
                  size="medium"
                >
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
      ) : (
        <Loading />
      )}
    </Card>
  );
}
