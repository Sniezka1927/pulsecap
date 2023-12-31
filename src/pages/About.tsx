import React from "react";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
type Props = {};

const AboutPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
