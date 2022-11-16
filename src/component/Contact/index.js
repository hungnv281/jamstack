import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import styles from "./styles.module.scss";

function Contact() {
  const list = [
    {
      id: 1,
      img: "images/contact_1.jpg",
    },
    {
      id: 2,
      img: "images/contact_2.jpg",
    },
    {
      id: 3,
      img: "images/contact_3.jpg",
    },
    {
      id: 4,
      img: "images/contact_4.jpg",
    },
    {
      id: 5,
      img: "images/contact_5.jpg",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Follow us on Instagram for more updates</h1>
        <Button className={styles.btn}>
          <span className={styles.btnText}>Follow us</span>
          <ArrowRightOutlined />
        </Button>
      </div>

      <Row className={styles.img}>
        {list?.map((item, index) => (
          <Col className={styles.item} key={index} span={4}>
            <img src={item.img} alt="img" />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Contact;
