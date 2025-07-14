import { Search, UserRoundPen } from "lucide-react";

function Navber() {
  return (
    <nav className="flex justify-between items-center py-5">
      <div>
        <a href="#">
          <h1 className="text-5xl cursor-pointer lobster-regular text-amber-600">
            Khana<span className="text-black ">-</span>Table
          </h1>
        </a>
      </div>
      <ul className="flex gap-10 justify-center [&_li]:cursor-pointer items-center text-lg">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      <div className="flex gap-5">
        <div className="flex gap-2 rounded-full items-center px-4 bg-gray-200 ">
          <p className="cursor-pointer">
            <Search />
          </p>
          <input
            className="w-full h-full outline-none "
            type="text"
            name="search"
            placeholder="Search Here..."
          />
        </div>
        <div className="w-12 h-12 cursor-pointer rounded-full bg-amber-600">
          <UserRoundPen className="w-full h-full text-white pl-3 p-2" />
        </div>
      </div>
    </nav>
  );
}

export default Navber;
