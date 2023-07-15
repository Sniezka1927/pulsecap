import React from "react";
import styles from "./Title.module.scss";
type Props = {
  children: string;
};

const Title = (props: Props) => {
  return <h1 className={styles.title}>{props.children}</h1>;
};

export default Title;
