import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { documentUploaded, titleAdded } from "../../store/order/actions";
import { DropzoneArea } from "material-ui-dropzone";
import { TextField } from "@material-ui/core";
import TranslationOptions from "./TranslationOptions";

export default function FileUpload() {
  const [title, set_title] = useState("");
  const dispatch = useDispatch();

  function fileChangeHandler(file) {
    dispatch(documentUploaded(file));
  }

  const titleChangeHandler = (title) => {
    set_title(title);
    dispatch(titleAdded(title));
  };

  return (
    <div>
      <div>
        <h5> Upload your file here (.xml, .txt or .docx)</h5>
        <TextField
          className=".MuiInput-formControl"
          color="primary"
          type="text"
          required={true}
          value={title}
          onChange={(e) => titleChangeHandler(e.target.value)}
          placeholder="file title (required)"
        />

        <DropzoneArea
          acceptedFiles={[
            "text/plain",
            "text/xml",
            "application/xml",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ]}
          onChange={(file) => fileChangeHandler(file[0])}
        />
      </div>
      <TranslationOptions />
    </div>
  );
}
