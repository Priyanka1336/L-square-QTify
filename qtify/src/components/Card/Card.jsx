import { Tooltip, Chip } from "@mui/material";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import songContext from "../Context/Songcontext";

export default function Card({ data, type, albumdata, altalbumdata }) {
  let navigate = useNavigate();
  let results = [...albumdata, ...altalbumdata];
  let changeSong = useContext(songContext);
  switch (type) {
    case "album": {
      const { image, follows, title, songs } = data;
      return (
        <Tooltip title={`${songs.length} songs`} placement="top" arrow>
          <div
            onClick={() => {
              navigate("./albums", { state: { value: title, data: results } });
            }}
            className={styles.wrapper}
          >
            <div className={styles.card}>
              <img
                className={styles.cardimage}
                loading="lazy"
                src={image}
                alt="album_image"
              />
              <div className={styles.banner}>
                <Chip
                  label={`${follows} follows`}
                  size="small"
                  className={styles.chip}
                />
              </div>
            </div>
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        </Tooltip>
      );
    }
    case "song": {
      const { image, likes, title } = data;
      return (
        <div
          onClick={() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
            changeSong(data);
          }}
          className={styles.wrapper}
        >
          <div className={styles.card}>
            <img
              className={styles.cardimage}
              loading="lazy"
              src={image}
              alt="album_image"
            />
            <div className={styles.banner}>
              <Chip
                label={`${likes} Likes`}
                size="small"
                className={styles.chip}
              />
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
