import React from "react";
import styles from "./Input.module.scss";
import { ChangeEventHandler } from "react";

type Props = {
  type: string;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
};

const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      value={props.value}
      className={styles.input}
    ></input>
  );
};

export default Input;
