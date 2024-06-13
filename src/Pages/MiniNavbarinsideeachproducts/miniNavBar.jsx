import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { passdata } from "../../Components/Navigationstack/navigation";
import { FiMenu } from "react-icons/fi";
import clsx from "clsx";
import { MdBackspace } from "react-icons/md";
import axios from "axios";

const MiniNavBar = () => {
  const { cardProducts,productsFilteringCategoryWise,allCategoriesButton } = useContext(passdata);

  const [isSidemenuopen, setisSidemenuopen] = useState(false);
  const [menubtn,setmenubtn]=useState([])

  useEffect(()=>{
    fetchCategories();
  },[])

  const fetchCategories = async () => {
    let response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
   console.log(response.data)
    if (response.status === 200) {
        setmenubtn(response.data);
    } else {
      alert("Some thing went wrong....");
    }
  };
  return (
    <>
      <div className="shadow-custom w-full mt-4 ">
        <nav className="flex shadow-custom justify-center w-full">
          <ul
            className="flex  justify-center
                 rounded py-2 w-full  
                 "
          >
            <li>
              <FiMenu
                className="sm:hidden text-xl cursor-pointer"
                onClick={() => setisSidemenuopen(true)}
                />
            </li>

            {/* Mobile view navbar */}

            <div
              className={clsx(
                "fixed h-screen w-screen lg:hidden  backdrop-blur-sm top-0 left-0 -translate-x-full transition-all z-20 ",
                isSidemenuopen && "translate-x-0"
              )}
            >
              <section className="top-0 left-0 text-black flex flex-col h-screen absolute bg-orange-400 px-4   mt-0 py-2 z-50 w-56 gap-8 ">
                <MdBackspace 
                  onClick={() => setisSidemenuopen(false)}
                  className="text-3xl relative top-0 left-36
    cursor-pointer"
                />

                {
                    menubtn.map((each,i)=>{
                        return(
                            <React.Fragment key={i}>

                                <div className="flex justify-center  border-2">
                                    <button onClick={()=>productsFilteringCategoryWise(each)}
                                        
                                        className="text-base font-semibold font-custom"
                                        >{each}</button>
                                </div>
                            </React.Fragment>
                        )

                    })
                }

                         <div className="flex justify-center  border-2">

                <button className="text-base font-custom font-semibold " onClick={allCategoriesButton}>all Products</button>
                         </div>
                



              </section>
            </div>

                {/* <ListItems /> */}
            {/* --------------------- */}

            <li className="font-custom font-semibold px-2 rounded sm:text-xl
            ">
              <Link
                to={"/"}
                className="px-2 py-1 
               border-red-500
              sm:hover:border-b-2
              "
              >
                Home
              </Link>
            </li>

            <li className="font-custom font-semibold px-2 rounded sm:text-xl">
              <Link
                className="px-2 py-1 
               border-red-500
              sm:hover:border-b-2
              "
                to={"/collections"}
              >
                Collections
              </Link>
            </li>

            <li className="font-custom font-semibold px-2 rounded sm:text-xl">
              <button className="relative">
                <Link
                  to={"/Cartpage"}
                  className="px-2 py-1 
               border-red-500
              sm:hover:border-b-2
              "
                >
                  cart
                </Link>
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
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
