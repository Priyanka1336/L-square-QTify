import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { ReactComponent as Searchicon } from "../../assets/Search-icon.svg";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css";

export default function AutoSearchbar({ topAlbums, newAlbums }) {
  let navigate = useNavigate();
  let [inputVal, setInputVal] = useState("");
  let results = [...topAlbums, ...newAlbums];
  let handleSubmit = (e) => {
    e.preventDefault();
    navigate("./albums", { state: { value: inputVal, data: results } });
  };

  let handleChange = (e) => {
    navigate("./albums", { state: { value: e.label, data: results } });
  };

  let options = results.map((item) => {
    return {
      label: item.title,
      value: (
        <div
          style={{
            display: "flex",
            backgroundColor: "#121212",
            color: "white",
            justifyContent: "space-between",
            padding: "8px 10px 8px 2px",
            borderRight: "1px solid #34c94b",
            borderLeft: "1px solid #34c94b",
            borderBottom: "1px solid #34c94b",
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{
                  width: "70px",
                  height: "70px",
                  marginRight: "8px",
                  borderRadius: "10px",
                }}
                src={item.image}
                alt="barimage"
              />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p></p>
            </div>
          </div>
          <div>{item.follows} follows</div>
        </div>
      ),
    };
  });
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="search"
    >
      <Autocomplete
        sx={{}}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={options.map((item) => ({
          label: item.label,
          value: item.value,
        }))}
        renderInput={(params) => (
          <TextField
            className="input"
            fullWidth
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            value={inputVal}
            {...params}
            placeholder="Search a album of your choice"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        renderOption={(props, results) => {
          return (
            <div
              onClick={() => {
                handleChange(results);
              }}
              style={{ cursor: "pointer" }}
            >
              {results.value}
            </div>
          );
        }}
      />
      <button className="searchicon" type="submit">
        <Searchicon />
      </button>
    </form>
  );
}
