import React from "react";
import classes from "./Loader.module.css";
import mainLogo from "../../assets/logo.png"


const Loader = () => {
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.imageWrapper}>
        <img className={classes.mainLogo} src={mainLogo} alt="main-logo"></img>
      </div>
    </div>
  );
};

export default Loader;
