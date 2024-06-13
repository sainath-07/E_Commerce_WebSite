import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ButtonCategories from "./Buttonpage";
import ProductsList from "./Productslist";
import { passdata } from "../Navigationstack/navigation";
import MiniNavBar from "../../Pages/MiniNavbarinsideeachproducts/miniNavBar";
import { Link } from "react-router-dom";



const DummyProducts = () => {



  const{
    dummyproducts,products,setproducts,
    fetchProducts,allCategoriesButton,productsFilteringCategoryWise

  }= useContext(passdata)

  
  const [buttonCategories, setbuttonCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    let response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );

    if (response.status === 200) {
      setbuttonCategories(response.data);
    } else {
      alert("Some thing went wrong....");
    }
  };


  

  return (
    <>
    <div className="">

      <MiniNavBar/>
    </div>
      <div className="mt-8">

        <ButtonCategories
          handleaction={productsFilteringCategoryWise}
          allCategoriesButton={allCategoriesButton}
        >
          {buttonCategories}
        </ButtonCategories>

        <div className="grid mt-4 grid-cols-1  place-items-center  mx-auto justify-items-center items-center
        sm:gap-4 sm:mx-2  sm:grid-cols-2 
        md:grid-cols-3 md:mx-6
        md:px-2

        lg:grid-cols-4
        

        
        ">

          {products.map((each,i) => {
              const { image, price, title, id } = each;
            return (
              <React.Fragment key={i}>
                <div className="rounded-2xl 
       dark:bg-gray-800 hover:bg-black/80  container  hover:text-white relative shadow-xl duration-300 group sm:w-100px md:w-150px mt-24 border-2 border-red-900 
   
      w-[300px] mx-auto
      md:w-full
      
      ">
        {/* image section */}
        <div className="h-[100px] ">
          <img
            src={image}
            className="max-w-[150px]  mx-auto transform -translate-y-20
                                    group-hover:scale-105 duration-200
                                    drop-shadow-md rounded 
                                    
                                    "
            alt="image"
          />
        </div>

        {/* body section */}

        <div className="p-4 text-center">
          <h1 className="text-xl font-bold line-clamp-1">{title}</h1>
          <h1 className="text-xl font-bold line-clamp-1">{id}</h1>
          <p className="text-gray-500 group-hover:text-white duration-300 tet-sm line-clamp-3">
            {Math.round(price)}
          </p>

          <Link to={`/${title}/${id}`}>
            <button
              className="border-2 border-red-500
              bg-orange hover:scale-105 duration-300  py-1 px-4 rounded-full mt-4 group-hover:bg-dark
              hover:border-2 hover:opacity-75 group-hover:text-red text-dark
              
              
              "
            >
              ViewProduct
            </button>
          </Link>
        </div>
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
