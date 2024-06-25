import { Link, useParams } from "react-router-dom";
// import productList from "../Components/DummyProducts/productlistdata";
import React, { useContext, useState } from "react";
import { passdata } from "../Components/Navigationstack/navigation";
import MiniNavBar from "./MiniNavbarinsideeachproducts/miniNavBar";

const EachProductDetails = () => {
  const { addToCart, productList, cardProducts } = useContext(passdata);

  // const [cardProducts,setcardProducts]=useState([])
  const { productID } = useParams();

  const product = productList.find((each) => each.id == productID);

  // Checking whether the product exist in the cart or not , if exists then show the BUY_NOW button.

  const isProductInCart = (id) => {
    return cardProducts.some((item) => item.id === id);
  };

  const { image, title, price, description, category, rating, id } = product;

  return (
    <>
      <MiniNavBar />
      <div className="containerw-full mt-20 h-[80%]  flex flex-col justify-center items-center md:flex-row">
        {/* Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col  justify-center items-center ">
          <div className="flex justify-center">
            <img
              className="object-full w-[80%] border-2 border-stone-900 rounded "
              src={image}
              alt={title}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="text-xl text-green-600">
            ₹{price}{" "}
            <span className="line-through text-gray-500">
              ₹{(price * 1.5).toFixed(2)}
            </span>{" "}
            53% off
          </div>
          <div className="text-sm text-gray-600">
            {rating.rate} stars ({rating.count} reviews)
          </div>
          <p className="text-gray-700">{description}</p>
          <div className="text-sm text-indigo-600 uppercase font-semibold">
            {category}
          </div>

          {/* Add to Cart and Buy Now Buttons */}

          <div className="flex  justify-center md:justify-start space-x-4 mt-4">
            {isProductInCart(id) ? (
               <Link to={"/Cartpage"}>
              <button className="px-4 py-2 font-bold drop-shadow-lg	 bg-orange-500 text-white rounded">
               Buy Now
              </button>
              </Link>
            ) : (
              <>
                <button
                  className="px-4 py-2 font-bold drop-shadow-lg bg-green-600  text-white rounded"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EachProductDetails;
