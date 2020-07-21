import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MyButton from "../components/Button";
import { Link } from "react-router-dom";
import About from "../components/About";

export default function HomePage() {
  return (
    <Container>
      <Box my={4}>
        <div>
          <p>I'm an artist of transcreation</p>
          <MyButton text="Login / signup" />
        </div>
        <h3>
          I want a fast, high quality translation that is perfectly tailored to
          my brand.
        </h3>
        <Link to={"/order/step1"}>
          <MyButton text="Let's go!" />
        </Link>
        <MyButton text="Login / signup" />
        <About />
      </Box>
    </Container>
  );
}
