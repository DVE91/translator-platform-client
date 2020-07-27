import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectJobs } from "../store/dashboard/selectors";
import { fetchJobs } from "../store/dashboard/actions";
import { selectUser, selectToken } from "../store/user/selectors";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import OriginalDocument from "../components/Dashboard/Translation/OriginalDocument";
import TranslatedDocument from "../components/Dashboard/Translation/TranslatedDocument";
import { Card, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "150px",
    color: theme.palette.text.primary,
  },
  card: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    textAlign: "center",
  },
}));

export default function TranslationPage() {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const history = useHistory();
  const allJobs = useSelector(selectJobs);

  const singleJob = allJobs.find(function (job) {
    return parseInt(id) === job.id;
  });

  useEffect(() => {
    if (token === null || user.isTranslator === false) {
      history.push("/");
    } else {
      dispatch(fetchJobs(user.id));
    }
  }, [token, history, dispatch, user.isTranslator, allJobs[id]]);

  console.log("RENDER TEST TRANSLATIONPAGE");

  return (
    <div>
      {" "}
      {!singleJob ? (
        <Loading />
      ) : (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div>
                  <Link to="/dashboard">
                    <Button color="secondary" variant="outlined" size="small">
                      Back to dashboard
                    </Button>
                  </Link>
                </div>
                <div>
                  <h4>{singleJob.title}</h4>
                  <h6>
                    translation from: {singleJob.originalLanguage} to:{" "}
                    {singleJob.nativeLanguage}
                  </h6>
                </div>
                <div> </div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={3}>
                <OriginalDocument
                  text={singleJob.originalDocument}
                  deadline={singleJob.endDate}
                />
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.card} elevation={3}>
                <TranslatedDocument
                  userId={user.id}
                  jobId={singleJob.id}
                  submitted={singleJob.submitted}
                  savedText={singleJob.translatedDocument}
                />
              </Card>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}
