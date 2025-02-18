import React, { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = ({ song }) => {
  let [play, setPlay] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <img className={styles.image} src={song.image} alt="songimage" />
        <div style={{ position: "absolute", left: "5%" }}>
          <p>{song.title}</p>
          <p style={{ fontSize: "10px", color: "grey" }}>{song.genre.label}</p>
        </div>
      </div>

      <Box className={styles.slider} width={"50%"}>
        {play ? (
          <PauseCircleFilledIcon
            sx={{ fontSize: "2.5rem", cursor: "pointer" }}
            onClick={() => {
              setPlay(!play);
            }}
          />
        ) : (
          <PlayCircleFilledIcon
            sx={{ fontSize: "2.5rem", cursor: "pointer" }}
            onClick={() => {
              setPlay(!play);
            }}
          />
        )}
        <Box
          sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          width={"100%"}
        >
          <Slider
            sx={{
              "& .MuiSlider-thumb": {
                color: "#34c94b",
              },
              "& .MuiSlider-track": {
                color: "#34c94b",
              },
              "& .MuiSlider-rail": {
                opacity: 1,
                backgroundColor: "#ffff",
              },
            }}
            size="small"
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <div style={{ fontSize: "12px" }}>
            {Math.ceil(song.durationInMs / (1000 * 60))}:
            {Math.ceil((song.durationInMs / 1000) % 60)}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
