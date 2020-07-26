import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    background: theme.palette.primary.light,
  },
  title: {
    flewGrow: 1,
  },
}));

export default function Navigation() {
  const [value, set_value] = useState(0);
  const classes = useStyles();
  const user = useSelector(selectUser);

  const handleChange = (event, newValue) => {
    console.log("Whats value?", value);
    set_value(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={0}
          variant="fullWidth"
          indicatorColor="secondary"
          aria-label="nav tabs"
        >
          <Tab
            component="a"
            label="Tone of Choice"
            href="/"
            onClick={(event) => event.preventDefault}
            style={{ color: "white" }}
          />

          {user.token ? <LoggedIn /> : null}
        </Tabs>
      </AppBar>
    </div>
  );
}
