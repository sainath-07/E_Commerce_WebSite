import { Link, useParams } from "react-router-dom";
// import productList from "../Components/DummyProducts/productlistdata";
import React, {  useContext, useState } from "react";
import { passdata } from "../Components/Navigationstack/navigation";
import MiniNavBar from "./MiniNavbarinsideeachproducts/miniNavBar";




const EachProductDetails = () => {

    const{addToCart,productList,cardProducts}=useContext(passdata)

    // const [cardProducts,setcardProducts]=useState([])
    const { productID } = useParams();

    const product = productList.find((each) => each.id ==productID);

    // through this action products are added to cart.
    // const addToCart=(obj)=>{

    //     const res={...obj,count:1,totalprice:Math.round(obj.price)}
    //     setcardProducts([...cardProducts,res])
    // }



    

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  const { image, title, price, description, category, rating } = product;

  return (
    <>
   
       
    <MiniNavBar/>
      <div className="container mx-auto w-full mt-12 h-[80%] flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="w-full md:w-4/5 lg:w-3/4">
            <img
              className="object-full w-[80%] border-2 border-stone-400 rounded p-10"
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
          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded"
             onClick={()=>addToCart(product)}
            >
              Add to Cart
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachProductDetails;
