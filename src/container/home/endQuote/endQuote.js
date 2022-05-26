import React from "react";
import classes from "./endQuote.module.scss";
import LONG_LINE from "../../../assets/images/svg/longStroke.svg";

const EndQuote = () => {
  return (
    <div className={classes.container}>
      <img src={LONG_LINE} />
      <div className={classes.header}>Quality. Reliability. Guaranteed</div>
    </div>
  );
};

export default EndQuote;
