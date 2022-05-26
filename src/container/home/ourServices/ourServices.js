import React from "react";
import classes from "./ourServices.module.scss";
import handymanSvg from "../../../assets/images/svg/handyman.svg";
import carpenterSvg from "../../../assets/images/svg/carpenter.svg";
import plumberSvg from "../../../assets/images/svg/plumber.svg";
import painterSvg from "../../../assets/images/svg/painter.svg";
import electricianSvg from "../../../assets/images/svg/handyman.svg";
import LINE_SVG from "../../../assets/images/svg/longStroke.svg";
import SERVICE_IMG from "../../../assets/images/home/serviceImg.jpg";
import SERVICE_IMG_ALT from "../../../assets/images/home/mainImg3.jpg";

const OurServices = () => {
  return (
    <div className={classes.serviceContainer}>
      <div className={classes.serviceHeader}>Our Services</div>
      <div className={classes.serviceMainWrapper}>
        <div className={classes.serviceWrapper}>
          <img src={carpenterSvg} alt="icon" className={classes.svgIcon} />
          <div className={classes.service}>Carpenters</div>
        </div>
        <div className={classes.serviceWrapper}>
          <img src={plumberSvg} alt="icon" className={classes.svgIcon} />
          <div className={classes.service}>Plumbers</div>
        </div>
        <div className={classes.serviceWrapper}>
          <img src={electricianSvg} alt="icon" className={classes.svgIcon} />
          <div className={classes.service}>Electricians</div>
        </div>
        <div className={classes.serviceWrapper}>
          <img src={painterSvg} alt="icon" className={classes.svgIcon} />
          <div className={classes.service}>Painters</div>
        </div>
        <div className={classes.serviceWrapper}>
          <img src={handymanSvg} alt="icon" className={classes.svgIcon} />
          <div className={classes.service}>House Cleaners</div>
        </div>
        <div className={classes.serviceWrapper}>
          <img src={handymanSvg} alt="icon" className={classes.svgIcon} />
          <div className={classes.service}>Appliance Repairmen</div>
        </div>
      </div>
      <img src={LINE_SVG} alt="line" className={classes.svgLine} />
      <div className={classes.serviceInfo}>
        We have done the <span>background checks</span> so you don't have to
      </div>
      <div className={classes.serviceImageContainer}>
        <img src={SERVICE_IMG_ALT} alt="icon" className={classes.serviceImage} />
        <div className={classes.serviceInfoWrapper}>
          <div className={classes.serviceInfo}>
            <span>4.6</span>
            average ratings from over <span>5,000</span> reviews
          </div>
        </div>
        <div className={classes.serviceInfoWrapper}>
          <div className={classes.serviceInfo}>
            <span>quality</span>services at the most reasonable <span>price</span>
          </div>
        </div>
        <img src={SERVICE_IMG} alt="icon" className={classes.serviceImage} />
      </div>
    </div>
  );
};

export default OurServices;
