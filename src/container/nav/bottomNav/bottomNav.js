import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./bottomNav.module.scss";

const BottomNav = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.navWrapper}>
        <div className={classes.linksWrapper}>
          <div className={classes.links} onClick={() => navigate("/home")}>
            Home
          </div>
          <div className={classes.links} onClick={() => navigate("/about")}>
            About Us
          </div>
          <div className={classes.links} onClick={() => navigate("/services")}>
            Services
          </div>
          <div className={classes.links} onClick={() => navigate("/news")}>
            News
          </div>
          <div className={classes.links}>Gallery</div>
          <div className={classes.links}>Testimonials</div>
          <div className={classes.links}>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
