import React from "react";
import ReviewsCaraousel from "../../../component/caraousel/reviewsCaraousel/reviewsCaraousel";
import classes from "./reviews.module.scss";

const Reviews = () => {
  return (
    <div className={classes.container}>
      <div className={classes.caraouselWrapper}>
        <ReviewsCaraousel />
      </div>
    </div>
  );
};

export default Reviews;
