import React, { useEffect, useState } from "react";
import Cont from "../../UI/Container";
import Tokens from "./Tokens";
type Props = {};

const Cryptocurrencies = (props: Props) => {
  return (
    <Cont>
      <h1>Listed Tokens</h1>
      <Tokens />
    </Cont>
  );
};

export default Cryptocurrencies;
