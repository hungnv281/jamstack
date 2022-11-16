import React from "react";
import styles from "./styles.module.scss";
import { Button, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

function New() {
  return (
    <Row className={styles.container}>
      <Col className={styles.content} span={6} offset={4}>
        <h1>A new shopping experience</h1>
        <Button className={styles.btn}>
          <span className={styles.btnText}>Explore products</span>
          <ArrowRightOutlined />
        </Button>
      </Col>
      <Col className={styles.img} span={10} offset={3}>
        <img src="/images/new.jpg" alt="img" />
      </Col>
    </Row>
  );
}

export default New;
