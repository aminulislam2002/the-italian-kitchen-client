import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const { id, name, years_of_experience, number_of_recipes, likes, bio, image_url } = chef;
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-12">
        <div className="mt-5">
          <div className=" row bg-success bg-opacity-25 p-3">
            <div className="col-sm-12 order-2 order-md-2 order-lg-1 col-md-6 col-lg-4">
              <h4>Name: {name}</h4>
              <p>Years of experience: {years_of_experience}</p>
              <p>Numbers of recipes: {number_of_recipes}</p>
              <p>Likes: {likes}</p>
              <Button variant="info">
                <Link to={`/chef/${chef.id}`} className="text-decoration-none">
                  View Recipes
                </Link>
              </Button>
            </div>
            <div className="col-sm-12 order-3  order-md-3 order-lg-2 col-md-6 col-lg-4">
              <h4 className="text-center">Bio</h4>
              <p>{bio}</p>
            </div>
            <div className="col-sm-12 order-1  order-md-1 order-lg-3 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={image_url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
