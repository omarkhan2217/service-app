import React from "react";
import classes from "./loginCard.module.scss";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../component/UI/button/primaryButton";

const LoginCard = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.mainWrapper}>
      <form className={classes.formWrapper}>
        <div className={classes.header}>Service Company</div>
        <input type="email" placeholder="Enter Email" className={classes.registerInput} />
        <input type="password" placeholder="Enter Password" className={classes.registerInput} />
        <div className={classes.btnWrapper}>
          <PrimaryButton text={"Login"} onClick={() => navigate("/home")} />
        </div>
        <div className={classes.text}>
          New user?{" "}
          <span onClick={() => navigate("/register")} className={classes.spanText}>
            Click to sign up.
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginCard;
