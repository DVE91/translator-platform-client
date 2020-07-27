import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { documentUploaded, titleAdded } from "../../../store/order/actions";
import { DropzoneArea } from "material-ui-dropzone";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { TextField } from "@material-ui/core";
import TranslationOptions from "./TranslationOptions";

export default function FileUpload() {
  const [title, set_title] = useState("");
  const dispatch = useDispatch();

  function fileChangeHandler(document) {
    const reader = new FileReader();

    if (document !== undefined) {
      reader.readAsText(document);
      let wordCount;
      reader.addEventListener("loadend", function () {
        const content = reader.result;
        wordCount = content.split(" ").length;
        content.split(" ").map((word) => {
          if (word.indexOf("\n") !== -1) {
            wordCount++;
          }
          return word;
        });
        dispatch(documentUploaded({ file: content, wordCount }));
      });
    }
  }

  const titleChangeHandler = (title) => {
    set_title(title);
    dispatch(titleAdded(title));
  };

  return (
    <div className="step">
      <div>
        <h5> Upload your file here (.xml or .txt) </h5>
        <Container maxWidth="md">
          <FormControl variant="outlined" className="formControl">
            <TextField
              className=".MuiInput-formControl"
              color="primary"
              type="text"
              variant="outlined"
              required={true}
              value={title}
              onChange={(e) => titleChangeHandler(e.target.value)}
              placeholder="File title"
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <DropzoneArea
            filesLimit={1}
            showFileNames={true}
            acceptedFiles={["text/plain", "text/xml", "application/xml"]}
            onChange={(file) => fileChangeHandler(file[0])}
          />
        </Container>
      </div>
      <TranslationOptions />
    </div>
  );
}
