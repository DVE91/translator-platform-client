import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import LoggedIn from "./Authentication/LoggedIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.dark,
    padding: "5px",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const user = useSelector(selectUser);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={0} variant="fullWidth" aria-label="nav tabs">
          <Tab component="a" label="Tone of Choice" href="/" />
          {user.fullName !== undefined ? <LoggedIn /> : null}
        </Tabs>
      </AppBar>
    </div>
  );
}
