import React from "react";
import Cont from "../../UI/Container";
import Tokens from "../Cryptocurrencies/Tokens";
import Title from "../UI/Title";

type Props = {};

const Highlights = (props: Props) => {
  return (
    <Cont>
      <Title>Promoted Tokens</Title>
      <Tokens />
    </Cont>
  );
};

export default Highlights;
