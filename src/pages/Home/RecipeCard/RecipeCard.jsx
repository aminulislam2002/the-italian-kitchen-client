import React, { useState } from "react";

const RecipeCard = ({ recipe }) => {
  const { ingredients, instructions, title } = recipe;

  const [ingredientsItems, setIngredientsItems] = useState(5);
  const [instructionsItems, setInstructionsItems] = useState(3);

  const handleIngredientsClick = () => {
    setIngredientsItems(ingredients.length);
  };

  const handleInstructionsClick = () => {
    setInstructionsItems(instructions.length);
  };
  return (
    <div>
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12">
          <div className="card mt-5">
            <div className="card-body row">
              <div className="col">
                <h3>{title}</h3>
                <h4>Here image</h4>
              </div>
              <div className="col">
                <h3>Ingredients</h3>
                <ol>
                  {ingredients.slice(0, ingredientsItems).map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.name} {ingredient.quantity}
                    </li>
                  ))}
                </ol>
                {ingredientsItems < ingredients.length && (
                  <button onClick={handleIngredientsClick} type="button" className="btn btn-link">
                    See More
                  </button>
                )}
              </div>
              <div className="col">
                <h3>Instructions</h3>
                <ul>
                  {instructions.slice(0, instructionsItems).map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
                {instructionsItems < instructions.length && (
                  <button onClick={handleInstructionsClick} type="button" className="btn btn-link">
                    See More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
