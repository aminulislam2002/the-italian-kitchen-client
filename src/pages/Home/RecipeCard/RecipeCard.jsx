import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeCard = ({ recipe }) => {
  const { ingredients, instructions, title, img } = recipe;

  const [ingredientsItems, setIngredientsItems] = useState(5);
  const [instructionsItems, setInstructionsItems] = useState(3);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIngredientsClick = () => {
    setIngredientsItems(ingredients.length);
  };

  const handleInstructionsClick = () => {
    setInstructionsItems(instructions.length);
  };

  const handleShowToast = () => {
    toast("Favorited!");
    setIsFavorite(true);
  };

  return (
    <div>
      <div className=" pb-5">
        <div className="row bg-primary bg-opacity-25 p-5 rounded-5">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="w-100 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <h4 className="text-center">{title}</h4>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h3>Ingredients</h3>
            <ol>
              {ingredients.slice(0, ingredientsItems).map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name} {ingredient.quantity}
                </li>
              ))}
            </ol>
            {ingredientsItems < ingredients.length && (
              <button onClick={handleIngredientsClick} type="button" className="btn btn-link text-decoration-none">
                See More
              </button>
            )}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <h3>Instructions</h3>
            <ul>
              {instructions.slice(0, instructionsItems).map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
            {instructionsItems < instructions.length && (
              <button onClick={handleInstructionsClick} type="button" className="btn btn-link text-decoration-none">
                See More
              </button>
            )}
            <div className="d-flex justify-content-end align-items-end">
              <button
                onClick={handleShowToast}
                type="button"
                className="btn btn-info"
                id="favorite-btn"
                disabled={isFavorite}
              >
                Favorite
              </button>
              
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
