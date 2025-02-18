import React, { useEffect, useState } from "react";
import { ReactComponent as Righticon } from "../../../assets/Righticon.svg";
import styles from "./Rightarrow.module.css";

const Rightarrow = ({ swiper }) => {
  const [isEnd, setIsEnd] = useState(swiper?.isEnd);

  useEffect(() => {
    if (!swiper) return; // Ensure swiper is defined

    const updateState = () => setIsEnd(swiper.isEnd);
    swiper.on("slideChange", updateState);

    return () => {
      swiper.off("slideChange", updateState);
    };
  }, [swiper]);

  return (
    <div className={styles.rightarrow}>
      {!isEnd && swiper && <Righticon onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default Rightarrow;
