import React from "react";
import meals from "../../Assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCart from "./HeaderCart";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCart />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="A TAble with food" />
      </div>
    </>
  );
};

export default Header;
