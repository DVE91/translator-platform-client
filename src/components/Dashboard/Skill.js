import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { addSkill } from "../../store/dashboard/actions";
import { Button, Select, FormControl } from "@material-ui/core";

export default function Skill(props) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [originalLanguage, set_originalLanguage] = useState("");
  const [nativeLanguage, set_nativeLanguage] = useState("");

  const addSkillHandler = () => {
    dispatch(addSkill(originalLanguage, nativeLanguage, user.id));
    props.cancelAddSkill();
  };

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
          <option aria-label="None" value="" />
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
          <option aria-label="None" value="" />
          {props.languages.map((language, i) => (
            <option value={language.title} key={i}>
              {language.title}
            </option>
          ))}
        </Select>

        <Button
          style={{ width: "30px" }}
          variant="contained"
          color="secondary"
          size="small"
          onClick={addSkillHandler}
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
