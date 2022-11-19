import { ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import styles from "./styles.module.scss";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isOverLay, setIsOverlay] = useState(false);

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
      {isOverLay ? (
        <div className={styles.overlay}>
          <Button className={styles.btnX} onClick={() => setIsOverlay(false)}>
            X
          </Button>
        </div>
      ) : (
        ""
      )}
      {/* <div className={styles.overlay}>123333 </div> */}
      <div className={styles.colContent}>
        <div className={styles.link}>
          <a href="/">Shop</a>
          <a href="/">About</a>
        </div>
      </div>
      <div className={styles.colContent}>
        <div
          className={styles.menuIcon}
          onClick={() => {
            setIsOverlay(true);
            console.log(isOverLay);
          }}
        >
          <img src="/images/menu-icon.jpg" alt="img" />
        </div>
        <p>commerce</p>
      </div>
      <div className={styles.colContent}>
        <a className={styles.btn} href="/">
          Login
        </a>
        <a className={styles.btn} href="/">
          <ShoppingOutlined />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
