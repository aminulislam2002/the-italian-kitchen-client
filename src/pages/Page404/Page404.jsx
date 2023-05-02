import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/error.jpg";

const Page404 = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="d-flex justify-content-center align-items-center position-relative">
        <div className="w-50">
          <img src={backgroundImage} className="img-thumbnail" alt="" />
        </div>
        <div className="w-50 position-absolute text-center text-warning bg-light bg-opacity-50">
          <h1>404</h1>
          <h2>Page not Found!</h2>
          <h3>This url is not correct!</h3>
          <Link to="/">Go to home page.</Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
