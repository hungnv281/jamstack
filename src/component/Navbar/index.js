import { ShoppingOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./styles.module.scss";

function Navbar() {
  return (
    <div
      className={
        window.scrollY === 0
          ? styles.navContainer
          : `${styles.navContainer} ${styles.isScroll}`
      }
      // onScroll={() => setIsScroll(true)}
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
