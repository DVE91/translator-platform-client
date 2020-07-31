import React from "react";
import Container from "@material-ui/core/Container";
import SignUp from "../../components/Authentication/SignUp";

export default function SignUpPage() {
  return (
    <Container>
      <SignUp redirect={true} />
    </Container>
  );
}
