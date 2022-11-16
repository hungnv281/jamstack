import React from "react";
import styles from "./styles.module.scss";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function Content() {
  return (
    <div className={styles.container}>
      <h1>
        MOISTURE IS THE ESSENCE OF WETNESS, AND WETNESS IS THE ESSENCE OF
        BEAUTY.
      </h1>
      <Button className={styles.btn}>
        <span className={styles.btnText}>Find out more</span>
        <ArrowRightOutlined />
      </Button>
    </div>
  );
}

export default Content;
