import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/About";
import Collections from "../../Pages/Collections";
import MenPage from "../../Pages/Men";
import HomePage from "../Mainpage/Homepage";
import EachProductDetails from "../../Pages/eachproductdetails";
import { createContext, useEffect, useState } from "react";
import productList from "../DummyProducts/productlistdata";
import Cartpage from "../../Pages/Cartpage";
import toast from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';
// import './toaster.css'

const notify = () => toast('Here is your toast.');


export const passdata = createContext();

// ---------------->Component
const NavigationStack = () => {

  const [products, setproducts] = useState([]);
  const [dummyproducts, setdummyproducts] = useState([]);
  
  const cartfromLocalStroage=JSON.parse(localStorage.getItem("cart") || "[]")
  const [cardProducts, setcardProducts] = useState(cartfromLocalStroage);
  
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cardProducts))
  },[cardProducts])


  // Search functionality varaible
  const [searchvalue, setsearchvalue] = useState("");

  // sortvalue set to value in the inputfield
  const [sortValue, setSortValue] = useState("");


  // add to cart functionality from eachproductdetais component

  const addToCart = (obj) => {
    const res = { ...obj, count: 1, totalprice: Math.round(obj.price) };
    setcardProducts([...cardProducts, res]);
    toast.success('Successfully toasted!')
  };
  
  
  
  //fetching  All products .....
  const fetchProducts = async () => {
    setproducts(productList);
    setdummyproducts(productList);
  };


  // Filtering products data in the collections component
  const productsFilteringCategoryWise = (category) => {
    setproducts(dummyproducts);

    const filterdata = dummyproducts.filter(
      (eachcategiores) => eachcategiores.category == category
    );

    setproducts(filterdata);
  };

  // All products button
  const allCategoriesButton = () => {
    let data = [...productList];
    if (data.length) {
      let result = productList.sort((a, b) => a.id - b.id);
      setproducts(result);
      setdummyproducts(result);
    }
  };

  // Sorting the products

  const sortAsc = () => {
    let data = [...products];
    if (data.length > 0) {
      let result = data.sort((a, b) => a.price - b.price);
      setproducts(result)
    }
  };

  const sortDes = () => {
    let data = [...products];
    if (data.length > 0) {
      let result = data.sort((a, b) => b.price - a.price);
      setproducts(result)
    }
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortValue(value);
    if (value === "a-z") {
      sortAsc();
    } else if (value === "A-Z") {
      sortDes();
    }
  };

  // search field functionaliy

  const userSearchProducts = (e) => {
    let value = e.target.value;
    setsearchvalue(value);

    if (searchvalue) {
      const filterdata = productList.filter((eachcategiores) =>
        eachcategiores.productType.includes(value)
      );
      if (filterdata) {
        setproducts(filterdata);
        setdummyproducts(filterdata);
      // setrenderProducts(false);
      }
    } 
   
  };






  return (
    <>
      <passdata.Provider
        value={{
          userSearchProducts,
          setsearchvalue,
          handleSortChange,
          productsFilteringCategoryWise,
          setproducts,
          setdummyproducts,
          allCategoriesButton,
          fetchProducts,
          addToCart,
          setcardProducts,
          sortAsc,

          searchvalue,
          sortValue,
          productList,
          products,
          dummyproducts,
          cardProducts,
        
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/Products" Component={Collections} />
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
