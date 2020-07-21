import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Stepper from "../../components/Order/Stepper";

export default function Steps() {
  return (
    <Container>
      <Box my={4}>
        <Stepper />
      </Box>
    </Container>
  );
}
