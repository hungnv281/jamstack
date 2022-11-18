import { Col, Row } from "antd";
import React from "react";
import styles from "./styles.module.scss";

function CopyRight() {
  return (
    <Row className={styles.container}>
      <Col className={styles.deploy} span={6} offset={2}>
        <p>DEPLOY TO NETLIFY - CLONE IN GITHUB - CONTRIBUTE</p>
      </Col>
      <Col className={styles.copyRight} span={6} offset={7}>
        <p>© 2022 CHEC/COMMERCE.JS.</p>
      </Col>
    </Row>
  );
}

export default CopyRight;
