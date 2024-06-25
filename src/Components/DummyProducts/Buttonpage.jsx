import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import clsx from "clsx";
import './buttonpage.css'

const ButtonCategories = ({
  children,
  handleaction,
  allCategoriesButton,
  handleSortChange,
  sortValue,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const fontbold = {
    fontFamily: "Poppins",
    fontWeight: 600,
  
  };

  const handleButtonClick = (category) => {
    setActiveCategory(category);
    handleaction(category);
  };

  return (
    <div className="hidden md:flex px-4 justify-center gap-2 mb-4">
      {children.length > 0 ? (
        <>
          {children.map((each, i) => (
            <button
              key={i}
              className={clsx(
                "border-2 border-stone-900 sm:px-2 md:px-2 md:py-1 font-custom font-semibold",
                {
                  "active_class": activeCategory === each,
                }
              )}
              onClick={() => handleButtonClick(each)}
            >
              <span className="color" style={fontbold}>
                {each[0].toUpperCase() + each.slice(1)}
              </span>
            </button>
          ))}
        </>
      ) : (
        <PulseLoader color="#36d7b7" />
      )}

      <button
        className={clsx(
          "border-2 border-stone-900  px-2 py-1 font-custom font-semibold",
        
          (!activeCategory & !sortValue) && "bg-stone-900 text-white",
          {
            "active_class": activeCategory === "all",
          }
        
        )}
        onClick={() => {
          setActiveCategory("all");
          allCategoriesButton();
        }}
      >
        <span style={fontbold}>All categories</span>
      </button>

      <form>
        <select
          name="sort"
          id="sort"
          className="border-2 h-full border-stone-900 font-custom font-semibold"
          value={sortValue}
          style={fontbold}
          onChange={handleSortChange}
        >
          <option value="" style={fontbold} disabled>
           { !sortValue &&  "Sort Price "} 
          </option>
          <option
            value="a-z"
            style={fontbold}
            className="font-custom font-semibold"
          >
            Low to High
          </option>
          <option
            value="A-Z"
            style={fontbold}
            className="font-custom font-semibold"
          >
            High to Low
          </option>
        </select>
      </form>
    </div>
  );
};

export default ButtonCategories;
