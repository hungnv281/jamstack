import { Col, Row } from "antd";
import React from "react";
import styles from "./styles.module.scss";

function Categories() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <Row className={styles.listCategory}>
        <Col
          className={styles.itemCategory}
          xs={24}
          sm={24}
          md={11}
          lg={5}
          xl={5}
        >
          <div className={styles.imgCategory}>
            <img src="./images/contact_1.jpg" alt="img_category" />
          </div>
          <p className={styles.productName}>Facial Products</p>
        </Col>
        <Col
          className={styles.itemCategory}
          xs={24}
          sm={24}
          md={11}
          lg={5}
          xl={5}
        >
          <div className={styles.imgCategory}>
            <img src="./images/contact_2.jpg" alt="img_category" />
          </div>
          <p className={styles.productName}>Hair Products</p>
        </Col>
        <Col
          className={styles.itemCategory}
          xs={24}
          sm={24}
          md={11}
          lg={5}
          xl={5}
        >
          <div className={styles.imgCategory}>
            <img src="./images/contact_3.jpg" alt="img_category" />
          </div>
          <p className={styles.productName}>Body Products</p>
        </Col>
      </Row>
    </div>
  );
}

export default Categories;
