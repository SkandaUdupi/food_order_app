import styles from "./cart.module.css";
import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartOverlayContext from "../../store/CartOverlayContext";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartOverlayContext = useContext(CartOverlayContext);
  const totalAmt = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const addItemHandler = (item) => {
    cartCtx.addItem(item);
    return;
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const closeCartHandler = () => {
    cartOverlayContext.setCartClose();
  };
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amt</span>
        <span>{totalAmt}</span>
      </div>
      <div className={styles.actions}>
        <button onClick={closeCartHandler} className={styles["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
