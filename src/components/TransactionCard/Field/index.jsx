import React from "react";

import { Container, Label, Value } from "./styles";

export function Field({ label, value }) {
  return (
    <Container>
      <Label>{label}:</Label>
      <Value>{value}</Value>
    </Container>
  );
}
