import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateJob } from "../../../store/dashboard/actions";
import { showMessage } from "../../../store/appState/actions";
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
  const [savedTranslation, set_savedTranslation] = useState("");
  const [translation, set_translation] = useState(props.savedText);

  const autosaveInterval = 1000;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (savedTranslation !== translation) {
        dispatch(updateJob(translation, false, props.userId, props.jobId));
        set_savedTranslation(translation);
      }
    }, autosaveInterval);
    return () => clearTimeout(timer);
  }, [translation]);

  function submitHandler(event) {
    event.preventDefault();
    console.log("submitted!");
    dispatch(showMessage());
    dispatch(updateJob(translation, true, props.userId, props.jobId));
  }

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
