import { ShoppingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./styles.module.scss";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = (event) => {
    window.scrollY !== 0 ? setIsScroll(true) : setIsScroll(false);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={
        isScroll
          ? `${styles.navContainer} ${styles.isScroll}`
          : styles.navContainer
      }
      onScroll={handleScroll}
    >
      <div className={styles.colContent}>
        <div className={styles.link}>
          <a href="/">Shop</a>
          <a href="/">About</a>
        </div>
      </div>
      <div className={styles.colContent}>commerce</div>
      <div className={styles.colContent}>
        <a className={styles.btn} href="/">
          Theme Info
        </a>
        <a className={styles.btn} href="/">
          <ShoppingOutlined />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
