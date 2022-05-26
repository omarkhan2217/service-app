import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../component/UI/button/primaryButton";
import classes from "./topNav.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";
import "tippy.js/animations/shift-away.css";
import LanguageDropdown from "./languageDropdown/languageDropdown";

const TopNav = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div className={classes.navWrapper}>
        <div className={classes.brandWrapper}>
          <div className={classes.brandName}>COMPANY NAME</div>
        </div>
        <div className={classes.btnMainWrapper}>
          <Tippy
            placement="bottom-start"
            arrow={false}
            delay={[0, 500]}
            animation="shift-away"
            interactive={true}
            content={<LanguageDropdown />}
            className={classes.tippyAlt}
          >
            <div className={classes.btnWrapper}>
              <PrimaryButton
                onClick={() => navigate("/home")}
                text={`English`}
                icon={<i className="fa-solid fa-caret-down" />}
              />
            </div>
          </Tippy>
          <div className={classes.btnWrapper}>
            <PrimaryButton
              onClick={() => navigate("/login")}
              text={`Login`}
              icon={<i className="fa-solid fa-check"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
