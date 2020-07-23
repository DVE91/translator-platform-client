import React from "react";
import { Paper } from "@material-ui/core";
import MyButton from "../../Button";

export default function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <MyButton text="Select" variant="contained" />
    </Paper>
  );
}
