import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { hideMessage, hideError } from "../store/appState/actions";
import { selectShowMessage, selectError } from "../store/appState/selectors";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function MySnackbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const messageShowing = useSelector(selectShowMessage);
  const errorShowing = useSelector(selectError);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideMessage());
    dispatch(hideError());
  };

  return (
    <div>
      {messageShowing ? (
        <div className={classes.root}>
          <Snackbar
            open={messageShowing}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="success">
              Awesome, that's done!
            </Alert>
          </Snackbar>
        </div>
      ) : null}
      {errorShowing ? (
        <div className={classes.root}>
          <Snackbar
            open={errorShowing}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              Something went wrong. Please make sure all the fields are properly
              filled in.
            </Alert>
          </Snackbar>
        </div>
      ) : null}
    </div>
  );
}
