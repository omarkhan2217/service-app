import React from "react";
import classes from "./servicesCard.module.scss";

const ServicesCard = ({ text, img }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.img} alt="Handyman" src={img} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.text}>{text}</div>
        <div className={classes.button}>See Costs</div>
      </div>
    </div>
  );
};

export default ServicesCard;
