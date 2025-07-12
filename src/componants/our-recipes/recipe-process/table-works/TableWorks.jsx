function TableWorks({ cookProcess, handleCookProcessing }) {
  console.log("this is cook process", cookProcess);
  // const { recipe_name, preparing_time, calories } = cookProcess;

  return (
    <table className="w-full space-y-5">
      <caption className="text-2xl font-semibold !space-y-5 ">
        <p>Want to cook: {cookProcess.length}</p>
        <hr className="mx-11 border-b border-amber-600" />
      </caption>
      <thead className="text-neutral-500/90">
        <tr className="py-5">
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="">
        {cookProcess.map((item, idx) => (
          <tr
            key={idx}
            className={`text-center py-5  ${
              idx % 2 !== 0 ? "bg-white" : "bg-gray-200"
            } text-neutral-600`}
          >
            <td className="py-8 px-5">{idx + 1}</td>
            <td className="px-2">{item.recipe_name}</td>
            <td className="px-2">{item.preparing_time} minutes</td>
            <td className="px-2 text-center">{item.calories} calories</td>
            <td className="px-4">
              <button
                key={idx}
                onClick={() => handleCookProcessing(item)}
                className="py-1 px-3 border-2 rounded-full font-bold text-white border-amber-900 bg-amber-600"
              >
                Preparing...
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableWorks;
