import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Promotions from "../components/Promotions/Promotions";
import Cryptocurrencies from "../components/Cryptocurrencies/Cryptocurrencies";
import Highlights from "../components/Highlights/Highlights";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Highlights />
      <Promotions />
      <Cryptocurrencies />
    </React.Fragment>
  );
};

export default HomePage;
