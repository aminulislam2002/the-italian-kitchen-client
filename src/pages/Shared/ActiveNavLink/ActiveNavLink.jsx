import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNavLink = ({ to, children }) => {
  return (
    <div className="">
      <NavLink to={to} className={({ isActive }) => (isActive ? "active bg-white py-2 px-3 rounded-2" : "")}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveNavLink;
