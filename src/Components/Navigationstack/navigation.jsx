import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "../../Pages/About";
import Collections from "../../Pages/Collections";
import MenPage from "../../Pages/Men";
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
  const [sortProduct, setsortProduct] = useState([]);

  const [cardProducts, setcardProducts] = useState([]);

  const [renderProducts, setrenderProducts] = useState(true);
  const [sortValue, setSortValue] = useState("");

  // Search functionality varaible
  const [searchvalue, setsearchvalue] = useState("");

  //fetching  All products .....
  const fetchProducts = async () => {
    setproducts(productList);
    setdummyproducts(productList);
    setsortProduct(productList);
  };

  // add to cart functionality from eachproductdetais component

  const addToCart = (obj) => {
    const res = { ...obj, count: 1, totalprice: Math.round(obj.price) };
    setcardProducts([...cardProducts, res]);
  };

  // Filtering products data in the collections component
  const productsFilteringCategoryWise = (category) => {
    setproducts(dummyproducts);

    const filterdata = dummyproducts.filter(
      (eachcategiores) => eachcategiores.category == category
    );

    setproducts(filterdata);
    setrenderProducts(false);
  };

  // All products button
  const allCategoriesButton = () => {
    let data = [...productList];
    if (data.length) {
      let result = productList.sort((a, b) => a.id - b.id);
      setproducts(result);
      setdummyproducts(result);
      setrenderProducts(false);
    }
  };

  // Sorting the products

  const sortAsc = () => {
    let data = [...sortProduct];
    if (data.length > 0) {
      let result = data.sort((a, b) => a.price - b.price);
      setsortProduct(result);
      setrenderProducts(true);
    }
    console.log(sortProduct);
  };
  const sortDes = () => {
    let data = [...sortProduct];
    if (data.length > 0) {
      let result = data.sort((a, b) => b.price - a.price);
      setsortProduct(result);
      setrenderProducts(true);
    }
    console.log(sortProduct);
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
      setrenderProducts(false);
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
          sortProduct,
          renderProducts,
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
