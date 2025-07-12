import { useState } from "react";

function TableCooking({ cooking }) {
  let totalTime = 0;
  let totalCalories = 0;

  return (
    <table className="w-full space-y-5">
      <caption className="text-2xl font-semibold space-y-5">
        <p>Currently cooking: {cooking.length}</p>
        <hr className="mx-11 border-b border-amber-600" />
      </caption>
      <thead>
        <tr className="text-neutral-500/90">
          <th></th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody className="text-neutral-600">
        {cooking.map((item, idx) => {
          // setTotalTime(totalTime + item?.preparing_time);
          // setTotalCalories(totalCalories + item?.calories);
          totalTime += item.preparing_time;
          totalCalories += item.calories;

          return (
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
            </tr>
          );
        })}
        <tr className={`${cooking.length ? "" : "hidden"}`}>
          <td></td>
          <td></td>
          <td className="font-semibold px-3">
            Total Times: {totalTime} minutes
          </td>
          <td className="font-semibold px-3">
            Total Calories: {totalCalories} calories
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableCooking;
