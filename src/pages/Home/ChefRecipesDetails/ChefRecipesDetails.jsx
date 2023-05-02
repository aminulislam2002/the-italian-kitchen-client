import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

const ChefRecipesDetails = () => {
  const { id } = useParams();

  const singleChefRecipes = useLoaderData();
  return (
    <div>
      <h1>Chef Recipes {id}</h1>
      <h1>Total Chef Recipes {singleChefRecipes.length}</h1>
      {singleChefRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
      ))}
    </div>
  );
};

export default ChefRecipesDetails;
