import React from "react";
import { useState } from "react";
import { Button, Select, FormControl, InputLabel } from "@material-ui/core";

export default function Skill(props) {
  const [originalLanguage, set_originalLanguage] = useState("Select language");
  const [nativeLanguage, set_nativeLanguage] = useState("Select language");

  function originalLanguageHandler(language) {
    set_originalLanguage(language);
    //dispatch(skillAdded(language));
  }

  function nativeLanguageHandler(language) {
    set_nativeLanguage(language);
    //dispatch(skillAdded(language));
  }

  function addSkillHandler(event) {
    event.preventDefault();
    //send dispatch(originalLanguage, nativeLanguage) to add skill action
  }

  return (
    <div>
      <FormControl variant="outlined" className="formControl">
        <InputLabel htmlFor="outlined-original-native-simple">From:</InputLabel>
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
          {props.languages.map((languagePair, i) => (
            <option value={languagePair.originalLanguage} key={i}>
              {languagePair.originalLanguage}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className="formControl">
        {/* <InputLabel htmlFor="outlined-native-native-simple">
          To my native language:
        </InputLabel> */}
        <h5>
          To my native language:
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
            {props.languages.map((language, i) => (
              <option value={language} key={i}>
                {language}
              </option>
            ))}
          </Select>
        </h5>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="small"
          onClick={addSkillHandler(originalLanguage, nativeLanguage)}
        >
          add
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={props.cancelAddSkill}
        >
          cancel
        </Button>
      </FormControl>
    </div>
  );
}
