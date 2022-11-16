import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <Row className={styles.container}>
      <Col className={styles.listWrap} span={6} offset={2}>
        <p className={styles.title}>Commerce.js</p>
        <div className={styles.list}>
          <ul>
            <li>
              <a href="/">Documentation</a>
            </li>

            <li>
              <a href="/">Features</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">About</a>
            </li>

            <li>
              <a href="/">Community</a>
            </li>
          </ul>
        </div>
      </Col>
      <Col className={styles.listWrap} span={6} offset={2}>
        <p className={styles.title}>Follow us</p>
        <div className={styles.list}>
          <ul>
            <li>
              <a href="/">Twitter</a>
            </li>

            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Angel</a>
            </li>

            <li>
              <a href="/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </Col>
      <Col className={styles.commerce} span={6}>
        <p className={styles.title}>Newsletter</p>
        <div className={styles.wrapper}>
          <Input placeholder="email address" className={styles.emailInput} />
          <ArrowRightOutlined className={styles.arrow} />
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
