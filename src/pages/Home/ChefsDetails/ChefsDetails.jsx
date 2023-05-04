import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefsDetails = () => {
  const [chefsDetails, setChefsDetails] = useState([]);
  const [showMoreChef, setShowMoreChef] = useState([6]);

  useEffect(() => {
    fetch("https://ph-assignment-number-ten-server-aminulislam2002.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefsDetails(data))
      .then((error) => console.log(error));
  }, []);

  const handleShowMoreChef = () => {
    setShowMoreChef(chefsDetails.length);
  };

  return (
    <div className="bg-dark bg-opacity-10 py-5">
      <div className="d-flex justify-content-center align-content-center text-center container bg-danger bg-opacity-25">
        <div className="w-75 p-md-5">
          <h1>Meet Our Expert Chefs</h1>
          <h6>
            Our expert chefs are passionate about creating culinary masterpieces that tantalize your taste buds. They come
            from diverse culinary backgrounds and have years of experience under their belts, working in some of the best
            kitchens around the world. From creating innovative dishes to perfecting traditional recipes, our chefs are
            dedicated to using the freshest ingredients and finest techniques to bring you the best culinary experience
            possible.
          </h6>
        </div>
      </div>

      <div className="container">
        {chefsDetails.slice(0, showMoreChef).map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
        {showMoreChef < chefsDetails.length && (
          <div className="d-flex justify-content-center pt-5">
            <button onClick={handleShowMoreChef} type="button" className="btn btn-info">
              Show More
            </button>
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center align-content-center text-center mt-5 container bg-danger bg-opacity-25">
        <div className="w-75 p-md-5">
          <h4>Discover Our Delicious Range of Dishes Across Six Categories</h4>
          <h6>
            "Explore our delicious range of dishes across six different categories. From refreshing drinks to savory chicken
            dishes, decadent cakes, mouth-watering pizzas, flavorful fish dishes, and comforting soups, we have something for
            everyone. Browse through our selection and discover new favorites to satisfy your cravings. Whether you're in the
            mood for a classic Margherita pizza or a bowl of steaming hot pho, we've got you covered.
          </h6>
        </div>
      </div>

      <div className="row container mx-auto my-5">
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 bg-primary bg-opacity-25 border py-3 px-5">
          <h2 className="PY-1 ">DRINKS</h2>
          <ul>
            <li>Coca-Cola</li>
            <li>Lemonade</li>
            <li>Iced tea</li>
            <li>Orange juice</li>
            <li>Coffee</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 bg-primary bg-opacity-25 border py-3 px-5">
          <h2 className="PY-1">CHICKEN DISHES</h2>
          <ul>
            <li>Fried chicken</li>
            <li>Chicken Parmesan</li>
            <li>Grilled chicken sandwich</li>
            <li>Chicken fajitas</li>
            <li>Chicken Alfredo</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 bg-primary bg-opacity-25 border py-3 px-5">
          <h2 className="PY-1">PIZZA</h2>
          <ul>
            <li>Margherita pizza</li>
            <li>Pepperoni pizza</li>
            <li>Hawaiian pizza</li>
            <li>BBQ chicken pizza</li>
            <li>Vegetarian pizza</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 bg-primary bg-opacity-25 border py-3 px-5">
          <h2 className="PY-1">FISH DISHES</h2>
          <ul>
            <li>Grilled salmon</li>
            <li>Fish and chips</li>
            <li>Sushi rolls</li>
            <li>Shrimp scampi</li>
            <li>Clam chowder</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 bg-primary bg-opacity-25 border py-3 px-5">
          <h2 className="PY-1">SOUPS</h2>
          <ul>
            <li>Tomato soup</li>
            <li>Chicken noodle soup</li>
            <li>Minestrone soup</li>
            <li>Broccoli cheddar soup</li>
            <li>Pho</li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-4 bg-primary bg-opacity-25 border py-3 px-5">
          <h2 className="PY-1">CAKES</h2>
          <ul>
            <li>Chocolate cake</li>
            <li>Red velvet cake</li>
            <li>Carrot cake</li>
            <li>Cheesecake</li>
            <li>Tiramisu</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChefsDetails;
