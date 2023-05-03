import React from "react";
import Image from "../../../assets/resturant.jpg";

const NavBanner = () => {
  return (
    <div className="position-relative">
      <div>
        <img src={Image} className="w-100" style={{ width: "500px", height: "400px" }} alt="" />
      </div>
      <div className="position-absolute top-0">
        <div className="w-100">
          <div className="d-flex justify-content-center align-content-center text-center py-5">
            <div className="w-75 py-md-5">
              <h2 className="text-white">Savor the Authentic Flavors of Italy at The Italian Kitchen.</h2>
              <h5 className="text-white py-3">
              The Italian Kitchen is a charming restaurant that brings the authentic taste of Italy to your plate. Nestled in the heart of the city, this cozy eatery is the perfect place to enjoy a delicious meal with friends and family.
              </h5>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Your Services" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBanner;
