import React from "react";
import Footer from "../container/footer/footer";
import Nav from "../container/nav/nav";

const Layout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
