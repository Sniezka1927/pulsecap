import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../assets/logo.png";
type Props = {};

const Logo = (props: Props) => {
  return <img src={logo} alt="Pulse Chain Explorer" className={styles.logo} />;
};

export default Logo;
