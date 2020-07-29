import React from "react";
import { useState } from "react";
import { Button, Select, FormControl, InputLabel } from "@material-ui/core";

export default function Skill(props) {
  const [originalLanguage, set_originalLanguage] = useState("");
  const [nativeLanguage, set_nativeLanguage] = useState("");

  function addSkillHandler(event) {
    console.log("Add skill");
    // event.preventDefault();
    //send dispatch(originalLanguage, nativeLanguage) to add skill action
  }

  return (
    <div>
      <FormControl variant="outlined" className="formControl">
        <h6>From:</h6>
        <Select
          native
          value={originalLanguage}
          onChange={(e) => set_originalLanguage(e.target.value)}
          label=""
          inputProps={{
            name: "old language",
            id: "outlined-original-native-simple",
          }}
        >
          {props.languages.map((language, i) => (
            <option value={language.title} key={i}>
              {language.title}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className="formControl">
        <h6>To my native language:</h6>
        <Select
          native
          value={nativeLanguage}
          onChange={(e) => set_nativeLanguage(e.target.value)}
          label=""
          inputProps={{
            name: "native language",
            id: "outlined-native-native-simple",
          }}
        >
          {props.languages.map((language, i) => (
            <option value={language.title} key={i}>
              {language.title}
            </option>
          ))}
        </Select>

        <Button
          style={{ width: "30px" }}
          type="submit"
          variant="contained"
          color="secondary"
          size="small"
          onClick={addSkillHandler(originalLanguage, nativeLanguage)}
        >
          add
        </Button>
        <Button
          style={{ width: "30px" }}
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
