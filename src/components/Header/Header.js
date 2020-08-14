import React from "react";
import classes from "./Header.module.css";
import image from "../../Assets/Images/notes.png";
const Header = () => {
  return (
    <header className={classes.Header}>
      <a href="/">
        <img src={image}></img>
        <h1>Keep Notes</h1>
      </a>
    </header>
  );
};

export default Header;
