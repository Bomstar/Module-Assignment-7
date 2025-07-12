import { Clock3, Flame } from "lucide-react";

function RecipesCard({ recipe, handleWantToCook }) {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    calories,
    preparing_time,
  } = recipe;
  return (
    <div className="p-5 space-y-3 border border-gray-300 rounded-2xl">
      <div className="rounded-lg aspect-video flex items-center justify-center overflow-hidden">
        <img className="object-cover" src={recipe_image} alt="object-contain" />
      </div>
      <div className="space-y-2 pb-3 border-b-[1.5px] border-amber-600 ">
        <h1 className="text-xl font-bold">{recipe_name}</h1>
        <p className="text-gray-600 ">{short_description}</p>
      </div>
      <div className="space-y-3 border-b-[1.5px] pb-5 !mb-3 border-amber-600">
        <h2 className="text-lg font-semibold">
          Ingredients: {ingredients.length}
        </h2>
        <ul className="list-disc marker:text-xs text-gray-600 pl-8">
          {ingredients.map((list, idx) => (
            <li key={idx}>{list}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5 justify-between text-gray-700">
        <p className="flex gap-2 items-center">
          <Clock3 size={22} /> {preparing_time} minutes
        </p>
        <p className="flex gap-2 items-center">
          <Flame size={22} /> {calories} calories
        </p>
      </div>
      <button
        onClick={() => handleWantToCook(recipe)}
        className="py-3 px-5 border-2 rounded-full font-bold text-white border-amber-900 bg-amber-600"
      >
        Want to Cook
      </button>
    </div>
  );
}

export default RecipesCard;
