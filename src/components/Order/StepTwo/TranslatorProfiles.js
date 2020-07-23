import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./TranslatorCard";

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
