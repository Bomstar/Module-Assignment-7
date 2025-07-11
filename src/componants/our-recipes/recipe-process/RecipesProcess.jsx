function RecipesProcess() {
  return (
    <div className="min-w-[40%] py-5 border border-gray-300 rounded-2xl">
      <table className="w-full space-y-5">
        <caption className="text-2xl font-bold">Recipe Data Table</caption>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="p-3">1</td>
            <td>meat</td>
            <td>20 minutes</td>
            <td>400 calories</td>
            <td>
              <button className="py-2 px-5 border-2 rounded-full font-bold text-white border-amber-900 bg-amber-600">
                procesing...
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecipesProcess;
