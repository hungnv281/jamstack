import React from "react";
import styles from "./styles.module.scss";

function Categories() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.listCategory}>
        <div className={styles.itemCategory}>
          <div className={styles.imgCategory}>
            <img src="./images/slide_1.jpg" alt="img_category" />
          </div>
          <p className={styles.productName}>Facial Products</p>
        </div>
        <div className={styles.itemCategory}>
          <div className={styles.imgCategory}>
            <img src="./images/slide_2.jpg" alt="img_category" />
          </div>
          <p className={styles.productName}>Hair Products</p>
        </div>
        <div className={styles.itemCategory}>
          <div className={styles.imgCategory}>
            <img src="./images/slide_3.jpg" alt="img_category" />
          </div>
          <p className={styles.productName}>Body Products</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
