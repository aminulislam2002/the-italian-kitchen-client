import React from "react";
import { Button } from "react-bootstrap";

const ChefCard = ({ chef }) => {
  console.log(chef);
  const { id, name, years_of_experience, number_of_recipes, likes, bio, image_url } = chef;
  console.log(id);
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-12">
        <div className="card mt-5">
          <div className="card-body d-flex gap-5">
            <div className="w-25">
              <h4>Name: {name}</h4>
              <p>Years of experience: {years_of_experience}</p>
              <p>Numbers of recipes: {number_of_recipes}</p>
              <p>Likes: {likes}</p>
              <Button variant="info">View Recipes</Button>
            </div>
            <div className="w-50">
              <h4 className="text-center">Bio</h4>
              <p>{bio}</p>
            </div>
            <div className="w-25 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={image_url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
