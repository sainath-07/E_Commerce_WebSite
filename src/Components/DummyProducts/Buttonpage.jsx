import React from "react";
import { PulseLoader } from "react-spinners";

const ButtonCategories = ({
  children,
  handleaction,
  allCategoriesButton,
  handleSortChange,
  sortValue,
}) => {
  return (
    <>
      <div className="hidden sm:flex px-4 justify-center gap-2 mb-4">
        {children.length > 0 ? (
          <>
            {children.map((each, i) => {
              return (
                <React.Fragment key={i}>
                  <button
                    className="border-2 border-stone-900 sm:px-2 md:px-2 md:py-1 font-custom font-semibold"
                    onClick={() => handleaction(each)}
                  >
                    {each}
                  </button>
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <PulseLoader color="#36d7b7" />
        )}

        <button
          className="border-2 border-stone-900 px-2 py-1 font-custom font-semibold"
          onClick={allCategoriesButton}
        >
          All categories
        </button>

 

        <form>
          <select
            name="sort"
            id="sort"
            className="border-2 h-full  border-stone-900 font-custom font-semibold"
            value={sortValue}
            onChange={handleSortChange}
          >
            <option value="" className="font-custom  font-semibold " disabled>
            Sort Price
            </option>
            <option value="a-z" className="font-custom font-semibold">low to High</option>
            <option value="A-Z" className="font-custom font-semibold">High to Low</option>
          </select>
        </form>
      </div>
    </>
  );
};
export default ButtonCategories;
