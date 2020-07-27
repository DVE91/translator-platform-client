import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    flexGrow: 1,
    background: "white",
    marginLeft: "25%",
  },
});

export default function JobFeed(props) {
  const classes = useStyles();

  let activeStep = 0;
  const handleProgress = () => {
    const translatedCount =
      props.translatedDocument === null || ""
        ? 0
        : props.translatedDocument.split(" ").length;

    const progress = (translatedCount / props.wordCount) * 100;
    activeStep = parseInt(progress);
    if (translatedCount > props.wordCount || props.submitted === true) {
      activeStep = 100;
    }
  };
  handleProgress();

  return (
    <div>
      <div className="container">
        <div>
          <h5>title: {props.title}</h5>
          <h6>type: {props.type}</h6>
        </div>

        <div>
          {!props.submitted ? (
            <Link to={`/dashboard/jobs/${props.id}`}>
              <Button variant="outlined" color="secondary" size="small">
                Work on this job
              </Button>
            </Link>
          ) : (
            <span>Submitted</span>
          )}
          <p>deadline: {moment(props.deadline).format("MMMM Do YYYY")}</p>
          <MobileStepper
            variant="progress"
            steps={100}
            position="static"
            activeStep={activeStep}
            className={classes.root}
          />
        </div>
      </div>
      <Divider variant="middle" />
    </div>
  );
}
