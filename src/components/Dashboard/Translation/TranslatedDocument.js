import React from "react";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/user/selectors";
import {
  updateJob,
  updateCurrentBalance,
} from "../../../store/dashboard/actions";
import { showMessage, showError } from "../../../store/appState/actions";
import MySnackbar from "../../MySnackbar";
import {
  CardHeader,
  CardContent,
  Divider,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

export default function TranslatedDocument(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [savedTranslation, set_savedTranslation] = useState("");
  const [translation, set_translation] = useState(props.savedText);

  const autosaveInterval = 1000;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (savedTranslation !== translation) {
        dispatch(updateJob(translation, false, user.id, props.jobId));
        set_savedTranslation(translation);
      }
    }, autosaveInterval);
    return () => clearTimeout(timer);
  }, [translation]);

  function submitHandler(event) {
    event.preventDefault();
    emailjs
      .send(
        "toneofchoicetranslations_gmail_com",
        "tone_of_voice_submitted_translation",
        {
          to_email: props.userEmail,
          from_name: user.fullName,
          from_email: user.emailAddress,
          reply_to: user.emailAddress,
          to_name: props.userName,
          message_html: savedTranslation,
        },
        "user_DqeV5Smja4L4mdVLwPa1x"
      )
      .then(
        (response) => {
          console.log("EMAIL SUCCESS!", response.status, response.text);
          dispatch(updateJob(translation, true, user.id, props.jobId));
          dispatch(
            updateCurrentBalance(props.gainings, user.id, props.financeId)
          );
          dispatch(showMessage());
        },
        (err) => {
          console.log("EMAIL FAILED...", err);
          dispatch(showError());
        }
      );
  }

  console.log("useer fullname?", user.fullName);

  return (
    <div>
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            Translated document
          </Typography>
        }
        subheader="Document saves automatically after every change"
      />
      <Divider />
      <CardContent>
        <form>
          <TextField
            variant="outlined"
            fullWidth
            value={translation}
            onChange={(e) => set_translation(e.target.value)}
            multiline
            rows={25}
            id="translation"
            label="Let's transcreate some magic!"
            name="translation"
          />
          <br />
          <MySnackbar />
          {!props.submitted ? (
            <div>
              <Button
                type="submit"
                onClick={submitHandler}
                variant="contained"
                color="primary"
                size="small"
              >
                Submit finished work to client
              </Button>
            </div>
          ) : (
            <span>This job has been submitted.</span>
          )}
        </form>
      </CardContent>
    </div>
  );
}
