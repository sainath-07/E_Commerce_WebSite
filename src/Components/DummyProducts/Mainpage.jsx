import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ButtonCategories from "./Buttonpage";
import { passdata } from "../Navigationstack/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {  NavLink } from "react-router-dom";
import clsx from "clsx";
import { GoMoveToTop } from "react-icons/go";
import './buttonpage.css'


const DummyProducts = () => {
  const {
    products,
    fetchProducts,
    allCategoriesButton,
    productsFilteringCategoryWise,
    sortAsc,
  
    sortValue,
    handleSortChange,
    searchvalue,
    userSearchProducts,
  } = useContext(passdata);

  const [buttonCategories, setbuttonCategories] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    setTimeout(() => {
      setisloading(false);
    }, 1000);
  }, []);

  const fetchCategories = async () => {
    try {
      let response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      if (response.status === 200) {
        setbuttonCategories(response.data);
      } else {
        alert("Something went wrong...");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

 
  return (
    <>
      <div className="sm:mt-20" id="#">
        <ButtonCategories
          handleaction={productsFilteringCategoryWise}
          allCategoriesButton={allCategoriesButton}
          sortAsc={sortAsc}
          sortValue={sortValue}
          handleSortChange={handleSortChange}
        >
          {buttonCategories}
        </ButtonCategories>


        {/* Search bar -----------------------------------> */}

        <div className="mt-16 ">
          <form
            className=" flex justify-center  h-[40px] px-4
          "
          >
            <input
              type="text"
              className="border-2 border-stone-900 rounded-md pl-2 
             h-full text-base sm:text-lg w-full  sm:w-4/5 md:w-3/5 lg:w-2/5"
              placeholder="Search Products"
              value={searchvalue}
              onChange={(e) => userSearchProducts(e)}
            />
          </form>
        </div>



        <div className="fixed left-0 top-[400px] w-[40px] sm:w-[50px] bg-black rounded-r-lg z-10 h-[42px]">
    <a href="#" className="w-full h-full text-center sm:ml-2  mt-2 text-xl text-white absolute "><GoMoveToTop className="text-3xl" />
    </a>
</div>



        {/* products */}

        <div
          className="grid  mb-6 grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
         gap-y-4 
        sm:justify-items-center lg:gap-4
        mx-4"
        >
         {products.map((each, i) => {
                const {
                  image,
                  price,
                  title,
                  id,
                  rating: { rate },
                  category,
                } = each;
                return (
                  <React.Fragment key={i}>
                    <div
                      className="rounded-2xl dark:bg-gray-800 hover:bg-black/80 container hover:text-white relative shadow-lg duration-300 group   w-full 
                sm:w-[90%] sm:h-[80%] flex flex-col justify-center items-center 
                md:w-[95%] md:h-full 
                lg:h-[420px] lg:w-full border-2"
                    >
                      {/* Image section */}
                      <div className="h-[50%] lg:h-[50%] ">
                        {isloading ? (
                          <Skeleton width={180} height={200} />
                        ) : (
                          <img
                            src={image}
                            className="w-full sm:w-[95%] h-full lg:w-full py-2 mx-auto transform group-hover:scale-105 duration-200 drop-shadow-md rounded "
                            alt="product"
                          />
                        )}
                      </div>

                      {/* content section */}
                      <div
                        className="mt-2 
                   md:max-h-[25%] py-2 md:py-0 text-center flex flex-col "
                      >
                        <h1 className="font-bold line-clamp-1 px-[2px] md:px-0">
                          {isloading ? <Skeleton width={100} /> : title}
                        </h1>
                     
                        <p className=" font-semibold line-clamp-1">
                          {isloading ? <Skeleton /> : <>Category: {category}</>}
                        </p>
                        <p className="text-base line-clamp-1">
                          {isloading ? (
                            <Skeleton />
                          ) : (
                            <>
                              {" "}
                              Price: <span>&#8377;</span>
                              {Math.ceil(price)}
                            </>
                          )}
                        </p>
                        <p className=" line-clamp-1">
                          {isloading ? (
                            <Skeleton />
                          ) : (
                            <>
                           

                            Rating: {Math.round(rate)}/5
                            
                            </>
                          )}
                        </p>
                      </div>

                      <NavLink to={`/${title}/${id}`}>
                        <button
                          className={clsx(
                            "hover:scale-105 duration-300 py-1 px-4 rounded-full group-hover:bg-dark hover:border-2 hover:opacity-75 mb-4 group-hover:text-red text-dark m-1 ",
                            !isloading && "border-2"
                          )}
                        >
                          {isloading ? <Skeleton /> : <> View Product </>}
                        </button>
                      </NavLink>
                    </div>
                  </React.Fragment>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default DummyProducts;
