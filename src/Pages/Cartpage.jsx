import React, { useContext } from "react";
import { passdata } from "../Components/Navigationstack/navigation";
import { FiX } from "react-icons/fi";
import MiniNavBar from "./MiniNavbarinsideeachproducts/miniNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Components/Footer/footer";


const Cartpage = () => {
  const { cardProducts, setcardProducts } = useContext(passdata);

  console.log(cardProducts, "cardProducts");

  const userAction = (action, index) => {
    switch (action) {
      case "INCREMENT":
        const countIncrease = cardProducts.map((each, i) => {
          if (each.id === index) {
            each.count++;
            each.totalprice = each.count * each.price;
            return each;
          } else {
            return each;
          }
        });

        setcardProducts(countIncrease);

        break;

      case "DECREMENT":
        const countdecrease = cardProducts.map((each, i) => {
          if (each.id === index && each.count > 1) {
            each.count--;
            each.totalprice = each.count * each.price;
            return each;
          } else {
            return each;
          }
        });
        setcardProducts(countdecrease);
    }
  };
  const deleteProduct = (data) => {
    const filterdata = cardProducts.filter((each, i) => each.id !== data);

    setcardProducts(filterdata);
  };

  return (
    <>
        <MiniNavBar/>

      <h1 className="text-3xl font-bold mt-14 text-center my-5">Cart Page 
      <FontAwesomeIcon icon={faCartShopping} />
      </h1>

      {/* Responsive grid layout for cart items */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {cardProducts.map((each, index) => {
          const { title, price, Brand, totalprice, image, count, id } = each;
          return (
            <div
              key={index}
              className="flex md:flex-row bg-white shadow-lg h-[270px] rounded-lg overflow-hidden "
            >
              <img
                src={image}
                className="w-[80%]  h-[80%] sm:h-42 md:w-48 object-contain"
                alt={title}
              />
              <div className="p-4 flex flex-col items-end grid-flow-col w-full">
                <div className="w-full">
                  <p className="text-sm font-semibold text-gray-600">
                    Brand: {Brand}
                  </p>
                  <p className="text-gray-800 font-bold mt-2">
                    Price: ${Math.ceil(price)}
                  </p>

                  <span className="mt-12 font-bold">quantity :{count}</span>

                  <div className="flex justify-end sm:justify-start gap-2 mt-2">
                    <button
                      onClick={() => userAction("INCREMENT", id)}
                      className="border-2  rounded-full text-2xl w-12 max-w-48"
                    >
                      {/* <FaPlus className="text-sm   mx-auto" /> */}+
                    </button>
                    <button
                      onClick={() => userAction("DECREMENT", id)}
                      className="border-2 rounded-full text-2xl w-12 max-w-48"
                    >
                      {/* <FiArrowDown className="text-sm   mx-auto"  /> */}
-
                    </button>
                  </div>
                  <p className="text-gray-800 font-bold mt-2">
                    totalprice: ${Math.ceil(totalprice)}
                  </p>
                </div>
                <button
                  className="mt-4 bg-red-500 text-white
                 py-1 rounded w-[30%] hover:bg-red-600 flex justify-center"
                  onClick={() => deleteProduct(id)}
                >
                  <FiX />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
};

export default Cartpage;
