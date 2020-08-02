import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  typeAdded,
  originalLanguageAdded,
  nativeLanguageAdded,
} from "../../../store/order/actions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import { fetchLanguages } from "../../../store/translation/actions";
import { selectLanguages } from "../../../store/translation/selectors";

export default function TranslationOptions() {
  const [docType, set_docType] = useState("");
  const [originalLanguage, set_originalLanguage] = useState("");
  const [translatedLanguage, set_translatedLanguage] = useState("");
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  function typeChangeHandler(type) {
    set_docType(type);
    dispatch(typeAdded(type));
  }

  function oldLanguageChangeHandler(oldLanguage) {
    set_originalLanguage(oldLanguage);
    dispatch(originalLanguageAdded(oldLanguage));
  }

  function newLanguageChangeHandler(newLanguage) {
    set_translatedLanguage(newLanguage);
    dispatch(nativeLanguageAdded(newLanguage));
  }

  return (
    <div>
      <br />
      <h5> Translation options</h5>
      <FormControl variant="outlined" className="formControl">
        <InputLabel htmlFor="outlined-type-native-simple">Type</InputLabel>
        <Select
          native
          value={docType}
          onChange={(e) => typeChangeHandler(e.target.value)}
          label=""
          inputProps={{
            name: "type",
            id: "outlined-type-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Blogpost/article"}>Blogpost/article</option>
          <option value={"Resume/cover letter"}>Resume/cover letter</option>
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
      <FormControl variant="outlined" className="formControl">
        <InputLabel htmlFor="outlined-original-native-simple">
          From (language)
        </InputLabel>
        <Select
          native
          value={originalLanguage}
          onChange={(e) => oldLanguageChangeHandler(e.target.value)}
          label=""
          inputProps={{
            name: "old language",
            id: "outlined-original-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          {languages.map((language, i) => (
            <option value={language.title} key={i}>
              {language.title}
            </option>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className="formControl">
        <InputLabel htmlFor="outlined-native-native-simple">
          To (language)
        </InputLabel>
        <Select
          native
          value={translatedLanguage}
          onChange={(e) => newLanguageChangeHandler(e.target.value)}
          label=""
          inputProps={{
            name: "new language",
            id: "outlined-native-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          {languages.map((language, i) => (
            <option value={language.title} key={i}>
              {language.title}
            </option>
          ))}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
