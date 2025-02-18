import React from "react";
import { ReactComponent as Backbutton } from "../../../assets/Backbutton.svg";
import { ReactComponent as Buttons } from "../../../assets/buttons.svg";
import { useNavigate } from "react-router-dom";

const Headeralbum = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <Backbutton
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div
        style={{
          padding: "40px 0px",
          display: "flex",
          columnGap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{ width: "350px", borderRadius: "10px" }}
            src={data.image}
            alt="albumimage"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>{data.songs.length} songs</div>
              <span style={{ fontSize: "5px", padding: "10px 10px" }}>
                {"\u2B24"}
              </span>
              <div>{data.follows} Follows</div>
            </div>
          </p>
          <Buttons />
        </div>
      </div>
    </>
  );
};

export default Headeralbum;
