import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../Navbar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Button } from "antd";
// import { Button } from "antd";

function Banner() {
  const slideImages = [
    {
      url: "images/slide_1.jpg",
      caption: "Slide 1",
    },
    {
      url: "images/slide_2.jpg",
      caption: "Slide 2",
    },
    {
      url: "images/slide_3.jpg",
      caption: "Slide 3",
    },
  ];
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="slide-container">
        <Slide arrows={false}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div
                className={styles.slideItem}
                style={{ backgroundImage: `url(${slideImage.url})` }}
              >
                <h1>The care you've always needed</h1>
                <h2>A RANGE OF PRODUCTS FOR YOU</h2>
                <Button className={styles.btn}>Shop now</Button>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Banner;
