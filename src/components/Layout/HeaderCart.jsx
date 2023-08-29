import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import styles from "./headerCart.module.css";
import CartOverlayContext from "../../store/CartOverlayContext";
import CartContext from "../../store/CartContext";
const HeaderCart = () => {
  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const cartContext = useContext(CartOverlayContext);
  const cartCtx = useContext(CartContext);
  let btnStyle = `${styles.button}  ${isBtnHighlighted ? styles.bump : ""}`;

  const noOfItems = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  const onClickHandler = () => {
    cartContext.setCartOpen();
  };
  useEffect(() => {
    if (cartCtx.items.lenght === 0) {
      return;
    }
    setIsBtnHighlighted(true);
    const token = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(token);
    };
  }, [cartCtx.items]);
  return (
    <button onClick={onClickHandler} className={btnStyle}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{noOfItems}</span>
    </button>
  );
};

export default HeaderCart;
