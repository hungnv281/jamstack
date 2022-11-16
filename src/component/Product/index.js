import { Col, Row } from "antd";
import React from "react";
import styles from "./styles.module.scss";

// import { Button } from "antd";

function Product() {
  const productsImages = [
    {
      img: "images/product_1.jpg",
      name: "Lip Fantastic",
      description:
        "A limited-edition, nourishing lip gel to top off your look and feel fantastic.",
      price: "$24.00",
    },
    {
      img: "images/product_2.jpg",
      name: "Eye Purity Gels",
      description:
        "Treat your skin with active pore enzymes that replenish sun damaged skin.",
      price: "$18.00",
    },
    {
      img: "images/product_3.jpg",
      name: "Complexion Cream",
      description:
        "Anti-aging complexion cream for medium to dry skin. Nourish your face with a natural vitamin burst for that perfectly balanced glow.",
      price: "$32.00",
    },
    {
      img: "images/product_4.jpg",
      name: "Hair Beauty Bath",
      description:
        "Made for your hair, a bath foam that brings your hair back to life.",
      price: "$25.00",
    },
  ];
  return (
    <Row className={styles.container}>
      {productsImages.map((product, index) => (
        <Col className={styles.productItem} key={index} span={6}>
          <div className={styles.imgProduct}>
            <img src={product.img} alt="productImg" />
          </div>
          <span>{product.name}</span>
          <span>{product.description}</span>
          <span>{product.price}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Product;
