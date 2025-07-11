import { useState, useEffect } from "react";
import RecipesCard from "./recipes-card/Recipes-card";
import RecipesProcess from "./recipe-process/RecipesProcess";

function OurRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  console.log(recipes);
  return (
    <div className="space-y-14">
      <div className="text-center px-48 space-y-5">
        <h1 className="text-4xl font-bold">Our Recipes</h1>
        <p>
          From family‑favorite classics to innovative chef creations, our
          recipes are designed to delight. Each one includes clear steps,
          beautiful photos, and tips to customize flavors to your taste.
        </p>
      </div>
      <div className="flex gap-10">
        <div className="grid grid-cols-2 gap-5">
          {recipes.map((item, idx) => (
            <RecipesCard key={idx} recipe={item}></RecipesCard>
          ))}
        </div>
        <RecipesProcess></RecipesProcess>
      </div>
    </div>
  );
}

export default OurRecipes;
