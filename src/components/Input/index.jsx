import React from "react";

import { Container, Label, _Input } from "./styles";

export function Input({ label, ...rest }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <_Input {...rest} />
    </Container>
  );
}
