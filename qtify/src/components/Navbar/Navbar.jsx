import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import AutoSearchbar from "../Searchbar/AutoSearchbar";
import "./Navbar.css";

const Navbar = ({ topAlbums, newAlbums }) => {
  return (
    <nav className="navbar">
      <Logo className="logo" />
      <AutoSearchbar topAlbums={topAlbums} newAlbums={newAlbums} />
      <Button className="button" text={"Give Feedback"} />
    </nav>
  );
};

export default Navbar;
