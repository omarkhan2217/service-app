import React from "react";
import classes from "./primaryButton.module.scss";

const PrimaryButton = ({ text, onClick, icon, isSearchButton, isSmallButton }) => {
  return (
    <button
      onClick={onClick ? onClick : null}
      className={isSmallButton ? classes.smallButton : isSearchButton ? classes.searchButton : classes.button}
    >
      {text ? text : null} {icon ? icon : null}
    </button>
  );
};

export default PrimaryButton;
