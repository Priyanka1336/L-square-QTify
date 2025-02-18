import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Headeralbum/Headeralbum";
import SongsTable from "./SongsTable/SongsTable";

const Albumssongs = () => {
  let location = useLocation();
  let albums = location.state.data;
  let albumName = location.state.value;
  let album = albums.find((item) => item.title === albumName);
  let songs = [];
  if (album) {
    songs = album.songs;
  }

  return songs.length ? (
    <div style={{ padding: "30px 50px" }}>
      <Header data={album} />
      <SongsTable data={songs} />
    </div>
  ) : (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      Sorry! No results found
    </div>
  );
};

export default Albumssongs;
