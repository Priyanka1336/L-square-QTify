import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as Righticon } from "../../../assets/Righticon.svg";
import styles from "./Rightarrow.module.css";

const Rightarrow = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  });
  return (
    <div className={styles.rightarrow}>
      {!isEnd && <Righticon onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default Rightarrow;
