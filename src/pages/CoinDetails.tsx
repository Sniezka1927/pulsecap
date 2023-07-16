import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Cryptocurrencies from "../components/Cryptocurrencies/Cryptocurrencies";
import Footer from "../components/Footer/Footer";
import Highlights from "../components/Highlights/Highlights";
import "../styles/body.scss";
import TokenDetails from "../components/TokenDetails/TokenDetails";
type Props = {};

const CoinDetailsPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <TokenDetails />
      <Footer />
    </React.Fragment>
  );
};

export default CoinDetailsPage;
