import React from "react";
import Button from "@material-ui/core/Button";

export default function MyButton(props) {
  return (
    <Button variant={props.variant} color="primary">
      {props.text}
    </Button>
  );
}
