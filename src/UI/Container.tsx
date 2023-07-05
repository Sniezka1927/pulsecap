import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Cont = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ m: 0 }}>{props.children}</Box>
    </Container>
  );
};

export default Cont;
