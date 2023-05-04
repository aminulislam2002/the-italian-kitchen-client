import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const ChefRecipesDetails = () => {
  const [chefDetail, setChefDetail] = useState([]);
  const { id } = useParams();
  // console.log(chefDetail);

  const singleChefRecipes = useLoaderData();

  useEffect(() => {
    fetch("https://ph-assignment-number-ten-server-aminulislam2002.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        const matchedChef = data.find((chef) => parseInt(chef.id) === parseInt(id));
        setChefDetail(matchedChef || {});
      })
      .then((error) => console.log(error));
  }, [id]);

  return (
    <div className="bg-dark bg-opacity-10">
      {chefDetail && (
        <div className="container pb-5">
          <div className="row bg-success bg-opacity-25 pt-5 pb-3 ps-2 pe-2">
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <img src={chefDetail.image_url} className="w-100 rounded-circle " alt="..." />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
              <h5>{chefDetail.name}</h5>
              <h6>Years of experience: {chefDetail.years_of_experience}</h6>
              <h6>Numbers of recipes: {chefDetail.number_of_recipes}</h6>
              <h6>Likes: {chefDetail.likes}</h6>
              <hr />
              <h6>Email: {chefDetail.contact?.email}</h6>
              <h6>Phone: {chefDetail.contact?.phone}</h6>
              <button type="button" className="me-1 btn btn-primary">
                <FaFacebook /> Facebook
              </button>
              <button type="button" className="me-1 btn btn-danger">
                <FaInstagram /> Instagram
              </button>
              <button type="button" className="me-1 btn btn-danger">
                <FaYoutube /> YouTube
              </button>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div>
                <h5>{chefDetail.name}</h5>
                <p>{chefDetail.bio}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        {singleChefRecipes.map((recipe) => (
          <RecipeCard key={recipe.key} recipe={recipe} id={id}></RecipeCard>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-info mb-5">
          <Link className="text-decoration-none text-black" to="/">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ChefRecipesDetails;
