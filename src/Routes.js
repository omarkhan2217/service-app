import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./container/about/about";
import Home from "./container/home/home";
import Login from "./container/login/login";
import News from "./container/news/news";
import Register from "./container/register/register";
import Services from "./container/services/services";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/*" element={<div>ERROR 404 NOT FOUND</div>} />
    </Routes>
  );
};

export default MainRoutes;
