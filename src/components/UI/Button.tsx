import React from "react";
import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";
type Props = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  children: string;
};

const Button = (props: Props) => {
  return (
    <button onClick={props.onClickHandler} className={styles.btn}>
      {props.children}
    </button>
  );
};

export default Button;
