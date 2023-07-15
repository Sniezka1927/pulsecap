import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Cryptocurrencies from "../components/Cryptocurrencies/Cryptocurrencies";
import Footer from "../components/Footer/Footer";
import Highlights from "../components/Highlights/Highlights";
import "../styles/body.scss";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Highlights />
      <Cryptocurrencies />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
