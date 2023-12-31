import React from "react";
import styles from "./input.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} id={props.id} {...props.input} />
    </div>
  );
});

export default Input;
