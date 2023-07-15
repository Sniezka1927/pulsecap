import React, { useEffect, useState } from "react";
import Cont from "../../UI/Container";
import Tokens from "./Tokens";
import Title from "../UI/Title";
type Props = {};

const Cryptocurrencies = (props: Props) => {
  return (
    <Cont>
      <Title>Listed Tokens</Title>
      <Tokens />
    </Cont>
  );
};

export default Cryptocurrencies;
