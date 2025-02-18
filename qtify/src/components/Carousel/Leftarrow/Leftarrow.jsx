import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as Lefticon } from "../../../assets/Lefticon.svg";
import styles from "./Leftarrow.module.css";

const Leftarrow = () => {
  const swiper = useSwiper();
  const [isbeginning, setIsBeginnning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginnning(swiper.isBeginning);
    });
  });
  return (
    <div className={styles.leftarrow}>
      {!isbeginning && <Lefticon onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default Leftarrow;
