import React from "react";
import logo from "../../assets/Qtify_Logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="Logo" />;
};

export default Logo;
