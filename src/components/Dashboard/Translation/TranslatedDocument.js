import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateJobTranslation } from "../../../store/dashboard/actions";
import {
  CardHeader,
  CardContent,
  Divider,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

export default function TranslatedDocument() {
  const dispatch = useDispatch();
  const [savedTranslation, set_savedTranslation] = useState("");
  const [translation, set_translation] = useState("");
  const [submitted, set_submitted] = useState(false);

  const autosaveInterval = 2000;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (savedTranslation != translation) {
        dispatch(updateJobTranslation(translation));
        set_savedTranslation(translation);
        console.log("saved!");
      }
    }, autosaveInterval);
    return () => clearTimeout(timer);
  }, [translation]);

  return (
    <div>
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            Translated document
          </Typography>
        }
        subheader="Document saves automatically every 5 seconds"
      />
      <Divider />
      <CardContent>
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
        {!submitted ? (
          <Button variant="contained" color="primary" size="small">
            Submit finished work to client
          </Button>
        ) : (
          <span>This job has been submitted.</span>
        )}
      </CardContent>
    </div>
  );
}
