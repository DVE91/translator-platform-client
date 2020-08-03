import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStylesSignUp } from "../../style/authentication/SignUp";
import { selectToken } from "../../store/user/selectors";
import { signUp } from "../../store/user/actions";
import MySnackbar from "../MySnackbar";

export default function SignUp(props) {
  const classes = useStylesSignUp();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  const [fullName, set_fullName] = useState("");
  const [emailAddress, set_emailAddress] = useState("");
  const [password, set_Password] = useState("");

  useEffect(() => {
    if (token !== null && props.redirect) {
      history.push("/");
    }
  }, [token, history, props.redirect]);

  function submitSignUpForm(event) {
    event.preventDefault();
    dispatch(signUp(fullName, emailAddress, password));

    set_fullName("");
    set_emailAddress("");
    set_Password("");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                value={fullName}
                onChange={(e) => set_fullName(e.target.value)}
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={emailAddress}
                onChange={(e) => set_emailAddress(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={password}
                onChange={(e) => set_Password(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={submitSignUpForm}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to="/login/translator" style={{ color: "rgb(247, 1, 85)" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        <MySnackbar />
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
