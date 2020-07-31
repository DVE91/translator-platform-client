import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createOrder } from "../../store/order/actions";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import FileUpload from "./StepOne/FileUpload";
import StepTwo from "./StepTwo/StepTwo";
import StepThree from "./StepThree/StepThree";
import StepFour from "./StepFour/StepFour";
import MySnackbar from "../MySnackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Upload your document",
    "Select deadline and translator",
    "Get quote",
    "Confirm",
  ];
}

export default function MyStepper() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleOrderConfirm = () => {
    dispatch(createOrder());
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <MySnackbar />
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button
              onClick={handleReset}
              variant="outlined"
              color="primary"
              size="small"
            >
              Repeat order process.
            </Button>
          </div>
        ) : (
          <div>
            {activeStep === 0 ? (
              <FileUpload />
            ) : activeStep === 1 ? (
              <StepTwo />
            ) : activeStep === 2 ? (
              <StepThree />
            ) : (
              <StepFour />
            )}
            <div>
              <br />
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={
                  activeStep === steps.length - 1
                    ? handleOrderConfirm
                    : handleNext
                }
              >
                {activeStep === steps.length - 1 ? "Confirm order" : "Next"}
              </Button>
              <MySnackbar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
