import React from "react";
import Cont from "../../UI/Container";
import Highlights from "../Highlights/Highlights";

type Props = {};

function Promotions(props: Props) {
  return (
    <Cont>
      <h1>Promoted Tokens</h1>
      <Highlights />
    </Cont>
  );
}

export default Promotions;
