import React from "react";
import styles from "./RegisterButton.module.scss";

const RegisterButton = (props) => {
  return (
      <button className={styles.register_button} onClick={props.onClick}>
        Next
      </button>
  );
};

export default RegisterButton;