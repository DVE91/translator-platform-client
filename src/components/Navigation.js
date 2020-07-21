import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" aria-label="nav tabs">
          <Tab component="a" label="Tone of Choice" href="/" />
        </Tabs>
      </AppBar>
    </div>
  );
}
