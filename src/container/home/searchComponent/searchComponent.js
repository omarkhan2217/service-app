import React from "react";
import PrimaryButton from "../../../component/UI/button/primaryButton";
import classes from "./searchComponent.module.scss";

const SearchComponent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Home Services, on demand</div>
      <div className={classes.searchWrapper}>
        <div className={classes.location}>
          <input placeholder="Location" type="text" className={classes.input} />
        </div>
        <div className={classes.search}>
          <input placeholder="Search for Services" type="search" className={classes.input} />
        </div>
        <div className={classes.btnWrapper}>
          <PrimaryButton isSearchButton={true} icon={<i className="fa-solid fa-search"></i>} />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
