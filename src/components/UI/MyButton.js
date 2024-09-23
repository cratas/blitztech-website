import React from "react";
import { Button } from "react-bootstrap";
import classes from "./MyButton.module.css";
import { Typography } from "@mui/material";

const MyButton = ({
  onButtonClick,
  customStyle,
  style,
  type,
  text,
  buttonType,
}) => {
  const buttonStyle =
    buttonType === "dark"
      ? `${classes.myButton} ${classes.buttonDark} ${customStyle}`
      : `${classes.myButton} ${customStyle}`;

  return (
    <Button
      className={buttonStyle}
      onClick={onButtonClick}
      style={style}
      type={type}
    >
      <Typography style={{ fontWeight: "bold" }}>{text}</Typography>
    </Button>
  );
};

export default MyButton;
