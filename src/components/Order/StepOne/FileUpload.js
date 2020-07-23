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

  function fileChangeHandler(file) {
    const reader = new FileReader();

    if (file !== undefined) {
      reader.readAsText(file);
      let wordCount;
      reader.addEventListener("loadend", function () {
        const content = reader.result;
        wordCount = content.split(" ").length;
        dispatch(documentUploaded({ file, wordCount }));
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
        <h5> Upload your file here (.xml, .txt or .docx)</h5>
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
              placeholder="file title (required)"
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>

          <DropzoneArea
            filesLimit={1}
            showFileNames={true}
            acceptedFiles={[
              "text/plain",
              "text/xml",
              "application/xml",
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ]}
            onChange={(file) => fileChangeHandler(file[0])}
          />
        </Container>
      </div>
      <TranslationOptions />
    </div>
  );
}
