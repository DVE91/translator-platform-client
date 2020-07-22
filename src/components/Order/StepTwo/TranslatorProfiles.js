import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import MyButton from "../../Button";
import { useState } from "react";

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <MyButton text="Select" variant="contained" />
    </Paper>
  );
}

export default function TranslatorProfiles() {
  var items = [
    {
      name: "Translator #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Translator#2",
      description: "Hello World!",
    },
  ];

  return (
    <div>
      <h5>2. Select your favorite translator</h5>{" "}
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
