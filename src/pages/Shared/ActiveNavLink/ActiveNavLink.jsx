import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNavLink = ({ to, children }) => {
  return (
    <div className="mt-2 text-white">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? " bg-info text-white text-decoration-none py-2 px-3 rounded-2 mx-2" : "text-white text-decoration-none mx-2"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveNavLink;
