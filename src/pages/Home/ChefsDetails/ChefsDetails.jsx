import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefsDetails = () => {
  const [chefsDetails, setChefsDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefsDetails(data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="container">
        {chefsDetails.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefsDetails;
