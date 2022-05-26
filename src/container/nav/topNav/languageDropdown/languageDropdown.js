import React from "react";
import classes from "./languageDropdown.module.scss";
import omanFlag from "../../../../assets/images/nav/omanFlag.webp";
import ukFlag from "../../../../assets/images/nav/ukFlag.webp";

const LanguageDropdown = () => {
  return (
    <div className={classes.listContainer}>
      <div className={classes.items}>
        <span>
          <img src={ukFlag} alt="Uk flag" className={classes.flagIcon} />
        </span>
        English
      </div>
      <div className={classes.items}>
        <span>
          <img src={omanFlag} alt="Oman flag" className={classes.flagIcon} />
        </span>
        Arabic
      </div>
    </div>
  );
};

export default LanguageDropdown;
