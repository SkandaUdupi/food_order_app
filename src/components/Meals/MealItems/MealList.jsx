import React, { useContext } from "react";
import styles from "./mealList.module.css";
import Form from "./Form";
import CartContext from "../../../store/CartContext";
const MealList = (props) => {
  let price = `$${props.price.toFixed(2)}`;
  const crtCtx = useContext(CartContext);
  const onAddCartItem = (amount) => {
    crtCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <>
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.desc}</div>
          <div className={styles.price}>{price}</div>
        </div>
        <div>
          <Form id={props.id} addEnteredAmount={onAddCartItem} />
        </div>
      </li>
    </>
  );
};

export default MealList;
