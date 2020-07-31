import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSkill } from "../../store/dashboard/actions";
import { Button, Select, FormControl, InputLabel } from "@material-ui/core";

export default function SkillFeed(props) {
  const dispatch = useDispatch();
  const original = props.skills.originalLanguage.title;
  const native = props.skills.nativeLanguage.title;
  const [originalLanguage, set_originalLanguage] = useState(original);
  const [nativeLanguage, set_nativeLanguage] = useState(native);

  console.log("SHOW ME ID", props.id);

  return (
    <div>
      <FormControl variant="outlined" className="formControl">
        <h6>From: </h6>
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
          onChange={(e) => set_nativeLanguage(e.target.value)}
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
          style={{ width: "30px" }}
          variant="contained"
          color="primary"
          size="small"
          onClick={() => dispatch(deleteSkill(props.id))}
        >
          delete
        </Button>
      </FormControl>
    </div>
  );
}
