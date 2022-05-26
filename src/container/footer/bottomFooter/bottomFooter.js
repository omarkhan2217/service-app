import React from "react";
import classes from "./bottomFooter.module.scss";

const BottomFooter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.text}>© 2022 Company Name</div>
      </div>
      <div className={classes.iconContainer}>
        <i className={`${classes.icon} fa-brands fa-facebook-f`}></i>
        <i className={`${classes.icon} fa-brands fa-instagram`}></i>
        <i className={`${classes.icon} fa-brands fa-twitter`}></i>
        <i className={`${classes.icon} fa-brands fa-linkedin-in`}></i>
      </div>
    </div>
  );
};

export default BottomFooter;
