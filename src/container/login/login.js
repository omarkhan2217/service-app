import React from "react";
import classes from "./login.module.scss";
import LoginCard from "./loginCard/loginCard";

const Login = () => {
  return (
    <div className={classes.container}>
      <LoginCard />
    </div>
  );
};

export default Login;
