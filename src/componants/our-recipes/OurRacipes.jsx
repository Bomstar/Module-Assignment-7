import { useState, useEffect } from "react";
import RecipesCard from "./recipes-card/Recipes-card";
import RecipesProcess from "./recipe-process/RecipesProcess";
import { ToastContainer, toast } from "react-toastify";

function OurRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [cookProcess, setCookProcess] = useState([]);
  const [cooking, setCooking] = useState([]);
  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleWantToCook = (recipe) => {
    const isRecipe = cookProcess.includes(recipe);
    const isCooking = cooking.includes(recipe);
    if (isRecipe || isCooking) {
      isRecipe
        ? toast("This Recipe Is Preparing...")
        : toast("This Recipe Alredy Cooking...");
      return;
    }
    const newRecipes = [...cookProcess, recipe];
    setCookProcess(newRecipes);
  };

  const handleCookProcessing = (item) => {
    const newCookProcess = cookProcess.filter((itm) => itm !== item);
    setCookProcess(newCookProcess);
    setCooking([...cooking, item]);
  };

  console.log(recipes);
  return (
    <div className="space-y-14 mb-14">
      <div className="text-center px-48 space-y-5">
        <ToastContainer position="top-right" autoClose={3000} />
        <h1 className="text-4xl font-bold">Our Recipes</h1>
        <p>
          From family‑favorite classics to innovative chef creations, our
          recipes are designed to delight. Each one includes clear steps,
          beautiful photos, and tips to customize flavors to your taste.
        </p>
      </div>
      <div className="flex gap-5">
        <div className="w-[55%] grid grid-cols-2  gap-5">
          {recipes.map((item, idx) => (
            <RecipesCard
              key={idx}
              recipe={item}
              handleWantToCook={handleWantToCook}
            ></RecipesCard>
          ))}
        </div>
        <div className="w-[45%] relative">
          <RecipesProcess
            cookProcess={cookProcess}
            handleCookProcessing={handleCookProcessing}
            cooking={cooking}
          ></RecipesProcess>
        </div>
      </div>
    </div>
  );
}

export default OurRecipes;
