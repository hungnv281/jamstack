import { Button } from "antd";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import Navbar from "../Navbar";
import styles from "./styles.module.scss";
// import { Button } from "antd";

function Banner() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="slide-container">
        <div className="each-slide">
          <div className={styles.slideItem}>
            <h1>The care you've always needed</h1>
            <h2>A RANGE OF PRODUCTS FOR YOU</h2>
            <Button className={styles.btn}>Shop now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
