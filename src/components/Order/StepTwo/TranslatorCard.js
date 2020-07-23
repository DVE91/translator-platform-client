import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { profileAdded } from "../../../store/order/actions";
import { Paper } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";

export default function TranslatorCard(props) {
  const [selected, setSelected] = useState(false);
  const [profileId, set_profileId] = useState(props.profile.id);
  const dispatch = useDispatch();

  const profileChangeHandler = (id) => {
    set_profileId(id);
    dispatch(profileAdded(profileId));
  };

  return (
    <Paper>
      <h4>
        {props.profile.user.imageUrl ? (
          <img
            alt=""
            style={"float:left;border-radius:50%;width:30px"}
            src={props.profile.user.imageUrl}
          />
        ) : null}
        {props.profile.user.fullName}
      </h4>
      <p>
        <strong>writing style: </strong>
        {props.profile.writingStyle}
      </p>
      <p>
        <strong>Experience: </strong>
        {props.profile.experience}
      </p>

      <ToggleButton
        value="select"
        selected={selected}
        onClick={() => profileChangeHandler(props.profile.id)}
        onChange={() => setSelected(!selected)}
      >
        SELECT
      </ToggleButton>
    </Paper>
  );
}
