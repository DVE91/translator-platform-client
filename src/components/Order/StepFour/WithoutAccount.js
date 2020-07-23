import React from "react";
import { useState } from "react";
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
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const classes = useStyles();

  // value={title}
  // onChange={(e) => titleChangeHandler(e.target.value)}

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
