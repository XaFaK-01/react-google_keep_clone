import React from "react";
import DeleteButtonImage from "../../../Assets/Images/delete-button.png";
import classes from "./DeleteButton.module.css";
const DeleteButton = (props) => (
  <div className={classes.DeleteButton}>
    <img
      src={DeleteButtonImage}
      alt={"Delete Button"}
      onClick={props.clicked}
    ></img>
  </div>
);

export default DeleteButton;
