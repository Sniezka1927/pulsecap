import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { JSX } from "react/jsx-runtime";

type Props = {
  children?: JSX.Element | JSX.Element[] | React.ReactNode[];
};

const Cont = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: 1.5 }}>{props.children}</Box>
    </Container>
  );
};

export default Cont;
