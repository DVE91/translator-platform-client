import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { typeAdded } from "../../../store/order/actions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

export default function TranslationOptions() {
  const [docType, set_docType] = useState("");
  const [originalLanguage, set_originalLanguage] = useState("");
  const [translatedLanguage, set_translatedLanguage] = useState("");
  const dispatch = useDispatch();

  function typeChangeHandler(type) {
    set_docType(type);
    dispatch(typeAdded(type));
  }

  return (
    <div>
      <h5> Translation options</h5>
      <FormControl variant="outlined" className="formControl">
        <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
        <Select
          native
          value={docType}
          onChange={(e) => typeChangeHandler(e.target.value)}
          label=""
          inputProps={{
            name: "type",
            id: "outlined-age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Blogpost"}>Blogpost/article</option>
          <option value={"Resume"}>Resume/cover letter</option>
          <option value={"Speech"}>Speech</option>
          <option value={"Website"}>Website</option>
          <option value={"Book"}>Book/e-book</option>
          <option value={"Subtitles"}>Subtitles</option>
          <option value={"Contract"}>Contract</option>
          <option value={"Terms and conditions"}>
            General terms and conditions
          </option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
