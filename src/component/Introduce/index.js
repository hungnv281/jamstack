import React from "react";
import styles from "./styles.module.scss";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function Introduce() {
  return (
    <div className={styles.container}>
      <p>Introducing Our Latest Products</p>
      <h1>Limited reservations on upcoming products and restocks.</h1>
      <Button className={styles.btn}>
        <span className={styles.btnText}>See more products</span>
        <ArrowRightOutlined />
      </Button>
    </div>
  );
}

export default Introduce;
