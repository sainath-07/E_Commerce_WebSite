import React, { useContext, useEffect, useState } from "react";
import { passdata } from "../Components/Navigationstack/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import axios from "axios";
import {load} from '@cashfreepayments/cashfree-js'
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";


const Cartpage = () => {



  const {handleClick, cardProducts,totalpricefun,userAction,deleteProduct ,checkout} = useContext(passdata);

  return (
    <>
      <div className="shadow-md w-full fixed bg-white left-0 top-0 z-20 border-b-2">
        <nav className="flex shadow-md justify-center w-full">
          <ul
            className="flex  justify-center
                 rounded py-2 w-full  
                 "
          >
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

            <li className="font-custom font-semibold px-2 rounded sm:text-xl">
              <NavLink
                className="px-2 py-1 
              
              "
                to={"/Cartpage"}
              >
                Cart
              </NavLink>
            </li>

            
          </ul>
        </nav>
      </div>
      {/* ------------------------------------ */}

      <h1 className="text-3xl font-bold mt-14 text-center my-5">
        Cart Page
        <FontAwesomeIcon icon={faCartShopping} />
      </h1>

      {/* Responsive grid layout for cart items */}

      <div className=" grid mt-4  grid-cols-1 justify-center content-center place-content-center  place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {cardProducts.map((each, index) => {
          const { title, price, Brand, totalprice, image, count, id } = each;
          return (
            <div
              key={index}
              className="flex md:flex-row   border-2 border-gray-300 w-full bg-white shadow-lg h-[270px] rounded-lg overflow-hidden "
            >
              <img
                src={image}
                className="w-[70%]  h-[65%] sm:h-42 md:w-48 object-contain"
                alt={title}
              />
              <div className="p-4 flex flex-col items-end grid-flow-col w-full">
                <div className="w-full">
                  <p className="text-[16px] sm:text-xl font-semibold text-gray-600">
                    Brand: {Brand}
                  </p>
                  <p className="text-gray-800 font-bold mt-2">
                    Price: <span>&#8377;</span>
                    {Math.round(price)}
                  </p>

                  <span className="mt-12 font-bold">Qty :{count}</span>

                  <div className="flex justify-end sm:justify-start gap-2 mt-2">
                    <button
                      onClick={() => userAction("INCREMENT", id)}
                      className="rounded-full flex  justify-center items-center w-[30px] h-[28px]  bg-stone-900"                    >
<Plus color="#f2f2f2" />

                    </button>
                    <button
                      onClick={() => userAction("DECREMENT", id)}
                      className="rounded-full flex  justify-center items-center w-[30px] h-[28px]  bg-stone-900"
                    >
<Minus color="#f2f2f2" />
</button>
                  </div>
                  <p className="text-gray-800 font-semi-bold mt-2">
                    Totalprice: ${Math.ceil(totalprice)}
                  </p>
                </div>
                <button
                  className="mt-4 bg-red-500 text-white
                  rounded p-[4px]  hover:bg-red-600 flex justify-center"
                  onClick={() => deleteProduct(id)}
                >   Remove
                </button>


                
              </div>
            </div>
          );
        })}
      </div>

      {/* Total coast of all products */}

      <div className="flex justify-center mt-8 sm:mt-2  h-[320px] mb-4">
        <div
          className=" flex gap-4  items-center rounded  md:w-[75%] flex-col lg:h-full lg:w-[40%] sm:w-[90%] w-[90%]"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <p className=" mt-8 font-semibold text-2xl text-center w-[90%]">
            Order summary
          </p>
          <div className="flex w-[90%] justify-between px-6">
            <p className="text-xl">Subtotal</p>
            <p className="text-xl font-bold">
              <span>&#8377;</span>
              {totalpricefun}
            </p>
          </div>
          <div className="flex w-[90%] justify-between px-6">
            <p className="sm:text-xl">
              Shipping estimate
              <BsFillQuestionCircleFill
                size={20}
                className="inline rounded-full bg-gray-300  ml-2 "
              />
            </p>
            <p className="text-gray-600">
              <span>&#8377;</span>150
            </p>
          </div>
          <div className="flex w-[90%] justify-between px-6">
            <p className="sm:text-xl">
              Tax estimate
              <BsFillQuestionCircleFill
                size={20}
                className="inline rounded-full bg-gray-300  ml-2 "
              />
            </p>

            <p className="text-sm">
              <span>&#8377;</span>8%
            </p>
          </div>
          <div className="flex w-[90%] justify-between px-6">
            <p className="font-semibold text-xl">Order total</p>
            <p className="font-bold text-2xl text-red-600">
              <span>&#8377;</span>
              {totalpricefun && checkout}
            </p>
          </div>

  {

cardProducts.length>0 ?

          <button
            className="w-[90%] h-[14%] text-2xl font-mono bg-blue-600 text-white rounded"
            onClick={
              handleClick}
          >
            Checkout 
          </button>

          :
         
          <button
          className="w-[90%] h-[14%] text-2xl font-mono rounded"
          
        >
           <Link to={'/Products'} className="p-2 w-full h-full text-white bg-blue-600">AddProdcuts</Link> 
        </button>


  }
          
        </div>
      </div>
    </>
  );
};

export default Cartpage;
