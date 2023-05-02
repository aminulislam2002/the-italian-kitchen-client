import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Home/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
