import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark bg-opacity-25 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-4 order-1 order-md-1 order-lg-1 d-flex justify-content-center align-align-items-lg-start">
              <div>
                <h2>The Italian Kitchn</h2>
                <h6>Authentic Italian Cuisine at The Italian Kitchen: A Cozy Haven for Foodies.</h6>
                <p>
                  At The Italian Kitchen, guests can enjoy a genuine Italian dining experience, complete with traditional
                  dishes, quality ingredients, and a warm, welcoming atmosphere.
                </p>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 order-3 order-md-3 order-lg-2 ">
              <div>
                <h4>Restaurant</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Latest Products
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      About Our Facilities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 order-3 order-md-4 order-lg-3 ">
              <div>
                <h4>Products</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Cool Drinks
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Chicken
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Fast Food
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Vegetables
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 order-4 order-md-5 order-lg-4">
              <div>
                <h4>Support</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Help Desk
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Message Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Call Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Email Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-2 order-5 order-md-2 order-lg-5 ">
              <div>
                <h4>Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-decoration-none" href="#">
                      +1777-978-5570
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      example@gmail.com
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      524 Broadway, Rome.
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Rome, Italy.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
