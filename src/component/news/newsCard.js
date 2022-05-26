import React from "react";
import classes from "./newsCard.module.scss";

const NewsCard = ({ text, img }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.img} alt="Handyman" src={img} />
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.text}>{text}</div>
        <div className={classes.button}>Read More</div>
      </div>
    </div>
  );
};

export default NewsCard;
