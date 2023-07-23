import React from "react";
import Cont from "../../UI/Container";
import Title from "../../UI/Title";
import Tokens from "../../Cryptocurrencies/Tokens";
type Props = {};

const Watchlist = (props: Props) => {
  return (
    <Cont>
      <Title>Watchlist</Title>
      <Tokens />
    </Cont>
  );
};

export default Watchlist;
