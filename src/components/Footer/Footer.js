import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
