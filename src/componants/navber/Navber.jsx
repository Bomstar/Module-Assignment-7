import { Search, UserRoundPen } from "lucide-react";

function Navber() {
  return (
    <nav className="flex justify-between items-center py-5">
      <div>
        <h1 className="text-5xl font-bold ">Khana Table</h1>
      </div>
      <ul className="flex gap-12 justify-center items-center text-xl">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Search</li>
      </ul>
      <div className="flex gap-5">
        <div className="flex gap-2 rounded-full items-center px-4 bg-gray-200 ">
          <p className="">
            <Search />
          </p>
          <input
            className="w-full px-5 h-full "
            type="text"
            name="search"
            placeholder="Search Here..."
          />
        </div>
        <div className="w-14 h-14 rounded-full bg-amber-600">
          <UserRoundPen className="w-full h-full text-white pl-3 p-2" />
        </div>
      </div>
    </nav>
  );
}

export default Navber;
