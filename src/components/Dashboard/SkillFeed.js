import React from "react";
import { useState } from "react";
import { Button, Select, FormControl, InputLabel } from "@material-ui/core";

export default function SkillFeed(props) {
  const [originalLanguage, set_originalLanguage] = useState("Dutch");
  const [nativeLanguage, set_nativeLanguage] = useState("French");

  function originalLanguageHandler(language) {
    set_originalLanguage(language);
    //dispatch(skillAdded(language));
  }

  function nativeLanguageHandler(language) {
    set_nativeLanguage(language);
    //dispatch(skillAdded(language));
  }

  function deleteSkillHandler(skillId) {
    //send dispatch to delete skill action
  }

  return (
    <div>
      <FormControl variant="outlined" className="formControl">
        <h6>From: </h6>
        <Select
          native
          value={originalLanguage}
          onChange={(e) => originalLanguageHandler(e.target.value)}
          label=""
          inputProps={{
            name: "old language",
            id: "outlined-original-native-simple",
          }}
        >
          <option value={originalLanguage}>{originalLanguage}</option>
          {props.languages.map((language, i) => (
            <option value={language.title} key={i}>
              {language.title}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className="formControl">
        <h6>To my native language: </h6>
        <Select
          native
          value={nativeLanguage}
          onChange={(e) => nativeLanguageHandler(e.target.value)}
          label=""
          inputProps={{
            name: "native language",
            id: "outlined-native-native-simple",
          }}
        >
          <option value={nativeLanguage}>{nativeLanguage}</option>
          {props.languages.map((language, i) => (
            <option value={language.title} key={i}>
              {language.title}
            </option>
          ))}
        </Select>
        <br />

        <Button
          style={{ width: "25px" }}
          variant="contained"
          color="primary"
          size="small"
          onClick={deleteSkillHandler(props.id)}
        >
          delete
        </Button>
      </FormControl>
    </div>
  );
}
