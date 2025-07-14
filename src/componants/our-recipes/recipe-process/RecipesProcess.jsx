import TableWorks from "./table-works/TableWorks";
import TableCooking from "./table-cooking/TableCooking";

function RecipesProcess({ cookProcess, handleCookProcessing, cooking }) {
  return (
    <div className="py-5 sticky top-8 border border-gray-300 rounded-2xl space-y-8">
      <TableWorks
        cookProcess={cookProcess}
        handleCookProcessing={handleCookProcessing}
      ></TableWorks>
      <TableCooking cooking={cooking}></TableCooking>
    </div>
  );
}

export default RecipesProcess;
