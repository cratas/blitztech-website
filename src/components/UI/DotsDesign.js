import React from "react";
import classes from "./DotsDesign.module.css";

export const DotsDesign = ({ variant }) => {
  const colorThemeDot = { backgroundColor: variant };

  const lines = (
    <div className={classes.mainDiv}>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
      <div className={classes.dotDiv} style={colorThemeDot}></div>
    </div>
  );

  return (
    <>
      {lines}
      {lines}
      {lines}
      {lines}
    </>
  );
};
