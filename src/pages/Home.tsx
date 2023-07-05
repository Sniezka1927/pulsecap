import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Promotions from "../components/Promotions/Promotions";
import Cryptocurrencies from "../components/Cryptocurrencies/Cryptocurrencies";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Promotions />

      <Cryptocurrencies />
    </React.Fragment>
  );
};

export default HomePage;
