import React from "react";
import classes from "./register.module.scss";
import RegisterCard from "./registerCard/registerCard";

const Register = () => {
  return (
    <div className={classes.container}>
      <RegisterCard />
    </div>
  );
};

export default Register;
