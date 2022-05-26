import React from "react";
import BottomFooter from "./bottomFooter/bottomFooter";
import TopFooter from "./topFooter/topFooter";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;
