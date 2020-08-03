import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderName, orderEmail } from "../../../store/user/actions";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export default function WithoutAccount() {
  const dispatch = useDispatch();
  const [name, set_name] = useState("");
  const [savedName, set_savedName] = useState(name);
  const [email, set_email] = useState("");
  const [savedEmail, set_savedEmail] = useState(email);
  const classes = useStyles();

  const autosaveInterval = 200;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (savedName !== name) {
        dispatch(orderName(name));
        set_savedName(name);
      }
    }, autosaveInterval);
    return () => clearTimeout(timer);
  }, [dispatch, name, savedName]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (savedEmail !== email) {
        dispatch(orderEmail(email));
        set_savedEmail(email);
      }
    }, autosaveInterval);
    return () => clearTimeout(timer);
  }, [dispatch, email, savedEmail]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={name}
            onChange={(e) => set_name(e.target.value)}
            name="Full name"
            label="Full name"
            id="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => set_email(e.target.value)}
            id="email"
            label="Email address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </form>
      </div>
    </Container>
  );
}
