import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/body.scss";
import Promote from "../components/Promote/Promote";
type Props = {};

const PromotePage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Promote />
      <Footer />
    </React.Fragment>
  );
};

export default PromotePage;
