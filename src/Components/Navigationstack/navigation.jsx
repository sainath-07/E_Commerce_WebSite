import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/About";
import Collections from "../../Pages/Collections";
import MenPage from "../../Pages/Men";
import Contactpage from "../../Pages/Cartpage";
import HomePage from "../Mainpage/Homepage";
import EachProductDetails from "../../Pages/eachproductdetails";
import { createContext, useState } from "react";
import productList from "../DummyProducts/productlistdata";
import Cartpage from "../../Pages/Cartpage";

export const passdata = createContext();

// ---------------->Component
const NavigationStack = () => {



  const [products, setproducts] = useState([]);
const [dummyproducts, setdummyproducts] = useState([]);

const [cardProducts, setcardProducts] = useState([]);


  // All products fetching.....
  const fetchProducts = async () => {
    setproducts(productList)
    setdummyproducts(productList)
  };

  const allCategoriesButton = async () => {
    setproducts(productList)
    setdummyproducts(productList)

    
  };


  const addToCart=(obj)=>{

        const res={...obj,count:1,totalprice:Math.round(obj.price)}
        setcardProducts([...cardProducts,res])

        
    }


    // Filtering products data
  const productsFilteringCategoryWise=(category)=>{
    setproducts(dummyproducts)
    
    const filterdata=dummyproducts.filter((eachcategiores) => eachcategiores.category == category)

    setproducts(filterdata)
  }

  return (
    <>
      <passdata.Provider
        value={{
          productsFilteringCategoryWise,
          productList,
          products,
          dummyproducts,
          setproducts,
          setdummyproducts,
          allCategoriesButton,
          fetchProducts,
          addToCart,
          cardProducts,
          setcardProducts
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/Collections" Component={Collections} />
            <Route path="/men" Component={MenPage} />
            <Route path="/About" Component={AboutPage} />
            <Route path="/Cartpage" Component={Cartpage} />
            <Route
              path="/:category/:productID"
              Component={EachProductDetails}
            />
          </Routes>
        </BrowserRouter>
      </passdata.Provider>
    </>
  );
};

export default NavigationStack;
