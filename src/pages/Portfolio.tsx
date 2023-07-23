import React from "react";
import Portfolio from "../components/User/Portfolio/Portfolio";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
type Props = {};

const PortfolioPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
};

export default PortfolioPage;
