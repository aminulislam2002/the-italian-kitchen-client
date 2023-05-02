import React from "react";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Home/Footer/Footer";
import { Outlet } from "react-router-dom";

const ChefRecipe = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipe;
