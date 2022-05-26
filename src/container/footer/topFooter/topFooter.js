import React from "react";
import classes from "./topFooter.module.scss";
import IMG from "../../../assets/images/logo/logoWhite.png";
import PrimaryButton from "../../../component/UI/button/primaryButton";

const TopFooter = () => {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <img className={classes.img} alt="Logo" src={IMG} />
        <div className={classes.textAlt}>Oman's #1 marketplace for home services.</div>
        <img className={classes.img} alt="Logo" src={IMG} />
        <div className={classes.textAlt}>
          Join our workforce. We provide opportunities for you to earn extra income.
        </div>
      </div>
      <div className={classes.customerContainer}>
        <div className={classes.header}>For Customers</div>
        <div className={classes.text}>Get a quote</div>
        <div className={classes.text}>How it works</div>
        <div className={classes.text}>Home tips</div>
        <div className={classes.text}>Cost guides</div>
        <div className={classes.text}>All services</div>
      </div>
      <div className={classes.prosContainer}>
        <div className={classes.header}>For Pros</div>
        <div className={classes.text}>Join as a pro</div>
        <div className={classes.text}>Login as a pro</div>
      </div>
      <div className={classes.aboutContainer}>
        <div className={classes.header}>About</div>
        <div className={classes.text}>About us</div>
        <div className={classes.text}>Careers</div>
      </div>
      <div className={classes.contactUsContainer}>
        <div className={classes.header}>Contact Us</div>
        <div className={classes.text}>
          <i className={`${classes.icon} fa-solid fa-phone`} />
          062 760 0681
        </div>
        <div className={classes.text}>
          <i className={`${classes.icon} fa-solid fa-envelope`} />
          info@kandua.com
        </div>
        <div className={classes.imgContainer}>
          <img className={classes.img} alt="Logo" src={IMG} />
        </div>
        <div className={classes.applyContainer}>
          <div className={classes.textAlt}>Are you a service pro?</div>
          <PrimaryButton text="Apply to join" />
        </div>
        <div className={classes.termsContainer}>
          <div className={classes.privacyText}>Privacy</div>
          <div className={classes.privacyText}>Accessibility</div>
          <div className={classes.privacyText}>Terms</div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
