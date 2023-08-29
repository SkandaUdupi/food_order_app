import React, { useRef, useState } from "react";
import styles from "./form.module.css";
import Input from "../../UI/Input";
const Form = (props) => {
  const [validAmount, setValidAmount] = useState(true);
  const amountInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const amountInput = amountInputRef.current.value;
    const amountInputNumber = +amountInput;

    if (
      amountInput.trim().length === 0 ||
      amountInputNumber < 1 ||
      amountInputNumber > 5
    ) {
      setValidAmount(false);
      return;
    }
    props.addEnteredAmount(amountInputNumber);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        id={props.id}
        input={{
          type: "number",

          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!validAmount && <p>Cant order more than 5 Items</p>}
    </form>
  );
};

export default Form;
