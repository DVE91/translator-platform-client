import React from "react";
import moment from "moment";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Typography,
} from "@material-ui/core";

export default function OriginalDocument(props) {
  return (
    <div className="display-linebreak">
      <CardHeader
        title={
          <Typography gutterBottom component="h2" variant="button">
            Original document
          </Typography>
        }
        subheader={`Please submit this job on or before ${moment(
          props.deadline
        ).format("MMMM Do YYYY")}`}
      />
      <Divider />
      <CardContent>{`${props.text}`}</CardContent>
    </div>
  );
}
