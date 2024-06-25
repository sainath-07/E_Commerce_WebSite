import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { passdata } from "../../Components/Navigationstack/navigation";
import { FiMenu } from "react-icons/fi";
import clsx from "clsx";
import { MdBackspace } from "react-icons/md";
import axios from "axios";
import "./mininavbar.css";

const MiniNavBar = () => {
  const {
    cardProducts,
    sortValue,
    handleSortChange,
    productsFilteringCategoryWise,
    allCategoriesButton,
    handleaction,
  } = useContext(passdata);

  const [isSidemenuopen, setisSidemenuopen] = useState(false);
  const [menubtn, setmenubtn] = useState([]);


  const fontbold = {
    fontFamily: "Poppins",
    fontWeight: 600,
  
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    let response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    //  console.log(response.data)
    if (response.status === 200) {
      setmenubtn(response.data);
    } else {
      alert("Some thing went wrong....");
    }
  };
  return (
    <>
      <div className="shadow-md w-full  fixed bg-white left-0 top-0 z-20 border-b-2">
        <nav className="flex shadow-md justify-center w-full">
          <ul
            className="flex  justify-center items-center
                 rounded py-2 w-full  
                 "
          >
            <li>
              <FiMenu
                className="md:hidden text-xl cursor-pointer"
                onClick={() => setisSidemenuopen(true)}
              />
            </li>

            {/* Mobile view navbar */}

            <div
              className={clsx(
                "fixed w-screen md:hidden h-full backdrop-blur-sm top-0 left-0 -translate-x-full transition-all ",
                isSidemenuopen && "translate-x-0"
              )}
            >
              <section className="absolute top-0 left-0 text-black flex flex-col h-screen bg-orange-400 px-8 mt-0 py-2  z-10 w-56 gap-12 ">
                <MdBackspace
                  onClick={() => setisSidemenuopen(false)}
                  className="text-4xl mt-2 
    cursor-pointer"
                />

                {menubtn.map((each, i) => {
                  return (
                    <React.Fragment key={i}>
                      <div className="flex justify-center ">
                        <button
                          onClick={() => productsFilteringCategoryWise(each)}
                          className="text-base font-semibold font-custom"
                          style={fontbold}
                        >
                {each[0].toUpperCase() + each.slice(1)}
                </button>
                      </div>
                    </React.Fragment>
                  );
                })}

                <div className="flex justify-center">
                  <button
                    className="text-base font-custom font-semibold "
                    onClick={allCategoriesButton}
                    style={fontbold}
                  >
                    All Products
                  </button>
                </div>

                <form className=" flex justify-center">
        <select
          name="sort"
          id="sort"
          className=" h-full font-custom font-semibold"
          value={sortValue}
          style={fontbold}
          onChange={handleSortChange}
        >
          <option value="" style={fontbold} disabled>
          Sort Price 
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
              </section>
            </div>
            {/* -------------End of the side view in the mobile page-------- */}

            <li
              className="font-custom font-semibold px-2 rounded sm:text-xl
            "
            >
              <NavLink
                to={"/"}
                className="px-2 py-1 
             
              "
              >
                Home
              </NavLink>
            </li>

            <li className="font-custom font-semibold px-2 rounded sm:text-xl">
              <NavLink
                className="px-2 py-1  
           
              "
                to={"/Products"}
              >
                Collections
              </NavLink>
            </li>

            <li className="font-custom font-semibold px-2  rounded  sm:text-xl">
              {/* <button className="relative "> */}
              <button
                className={clsx(
                  "relative",
                  isSidemenuopen && "backdrop-blur -z-10"
                )}
              >
                <NavLink
                  to={"/Cartpage"}
                  className="px-2 py-1 
               
              "
                >
                  Cart
                </NavLink>
                <span className="absolute top-2 sm:top-1 left-[23px]  sm:left-[28px]  translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center ">
                  {cardProducts.length}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MiniNavBar;
