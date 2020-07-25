import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import MyJobs from "../components/Dashboard/MyJobs";
import MyFinances from "../components/Dashboard/MyFinances";
import MyAvailability from "../components/Dashboard/MyAvailability";
import MyProfile from "../components/Dashboard/MyProfile";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  item: {
    border: "1x solid black",
  },
}));

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} direction="row" alignItems="stretch">
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          {" "}
          <MyAvailability />
          <MyFinances />
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <MyJobs />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MyProfile />
        </Grid>
      </Grid>
    </div>
  );
}

//<Grid item lg={4} sm={8} xl={3} xs={12}>
//sm={5} xl={3