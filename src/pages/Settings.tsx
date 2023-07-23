import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Settings from "../components/User/Settings/Settings";
type Props = {};

const SettingsPage = (props: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Settings />
      <Footer />
    </React.Fragment>
  );
};

export default SettingsPage;
