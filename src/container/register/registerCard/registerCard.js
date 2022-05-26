import React from "react";
import classes from "./registerCard.module.scss";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../component/UI/button/primaryButton";

const RegisterCard = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.mainWrapper}>
      <form className={classes.formWrapper}>
        <div className={classes.header}>Service Company</div>
        <input type="text" placeholder="Enter Username" className={classes.registerInput} />
        <input type="email" placeholder="Enter Email" className={classes.registerInput} />
        <input type="password" placeholder="Enter Password" className={classes.registerInput} />
        <input type="number" placeholder="Enter Phone" className={classes.registerInput} />
        <div className={classes.btnWrapper}>
          <PrimaryButton text={"Register"} onClick={() => navigate("/login")} />
        </div>
        <div className={classes.text}>
          Already Registered?{" "}
          <span onClick={() => navigate("/login")} className={classes.spanText}>
            Click to login.
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterCard;
