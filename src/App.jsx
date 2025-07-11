import { useState } from "react";
import Navber from "./componants/navber/Navber";
import HeaderBg from "./componants/headerBg/HeaderBg";
import OurRecipes from "./componants/our-recipes/OurRacipes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-6xl mx-auto space-y-14">
      <header className="space-y-5">
        <Navber></Navber>
        <HeaderBg></HeaderBg>
      </header>
      <main>
        <OurRecipes></OurRecipes>
      </main>
    </div>
  );
}

export default App;
