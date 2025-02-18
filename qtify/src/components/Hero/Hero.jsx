import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.heading}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.heading}>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          className={styles.image}
          src={require("../../assets/Heroimage.png")}
          alt="heroimage"
        />
      </div>
    </div>
  );
};

export default Hero;
