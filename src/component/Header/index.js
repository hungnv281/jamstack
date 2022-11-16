import React from "react";
import styles from "./styles.module.scss";
import { Button } from "antd";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.colContent}>Jamstack Themes</div>
      <div className={styles.colContent}>Commerce.js Next.js Demo Store</div>
      <div className={styles.colContent}>
        <Button className={styles.btn}>Theme Info</Button>
        <Button className={styles.btn}>Github</Button>
      </div>
    </div>
  );
}

export default Header;
