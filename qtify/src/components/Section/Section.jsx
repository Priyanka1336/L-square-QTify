import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Songtabs from "../Tabs/Tabs";
import { Divider } from "@mui/material";

const Section = ({ data, type, title, altdata = [] }) => {
  let [show, setShow] = useState(false);
  let [songType, setSongType] = useState("All");
  let [carouselData, setCarouselData] = useState([]);
  function handleToggle() {
    setShow(!show);
  }
  useEffect(() => {
    setCarouselData(data);
  }, [data]);

  function getCarouselData(songType) {
    if (songType === "All") return data;
    return data.filter((song) => song.genre.label === songType);
  }

  function handlesong(value) {
    let data = getCarouselData(value);
    setCarouselData(data);
    setSongType(value);
  }
  return (
    <div className={styles.sectionwrapper}>
      {type === "song" && (
        <div className={styles.line}>
          <Divider sx={{ backgroundColor: "#34c94b" }} />
        </div>
      )}
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.toggle} onClick={handleToggle}>
          {type === "song" ? null : !show ? "Show all" : "Collapse"}
        </div>
      </div>
      {type === "song" ? (
        <Songtabs value={songType} handleChange={handlesong} />
      ) : null}
      <div className={styles.datawrapper}>
        {!data.length ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "80px",
            }}
          >
            <CircularProgress sx={{ color: "#34c94b" }} />
          </Box>
        ) : show ? (
          <div className={styles.showdata}>
            {data.map((item) => {
              return <Card data={item} type={type} />;
            })}
          </div>
        ) : (
          <div className={styles.noshowdata}>
            <Carousel
              data={carouselData}
              component={(item) => (
                <Card
                  data={item}
                  type={type}
                  albumdata={data}
                  altalbumdata={altdata}
                />
              )}
            />
          </div>
        )}
      </div>
      {type === "song" && (
        <div className={styles.line2}>
          <Divider sx={{ backgroundColor: "#34c94b" }} variant="fullWidth" />
        </div>
      )}
    </div>
  );
};

export default Section;
