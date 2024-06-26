import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collections from "../../Pages/Collections";
import HomePage from "../Mainpage/Homepage";
import EachProductDetails from "../../Pages/eachproductdetails";
import { createContext, useEffect, useState } from "react";
import productList from "../DummyProducts/productlistdata";
import Cartpage from "../../Pages/Cartpage";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { load } from "@cashfreepayments/cashfree-js";
import Swal from "sweetalert2";

export const passdata = createContext();

const NavigationStack = () => {
  const [products, setproducts] = useState([]);
  const [dummyproducts, setdummyproducts] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const cartfromLocalStroage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cardProducts, setcardProducts] = useState(cartfromLocalStroage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cardProducts));
  }, [cardProducts]);

  const [orderId, setOrderId] = useState("");
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();



  // Payment gate way integration onclick on the checkout button
  let cashfree;

  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };

  insitialzeSDK();

  const getSessionId = async () => {
    try {
      let res = await axios.post(
        "https://payment-gateway-integration.onrender.com/payment",
        {
          order_amount: checkout,
          customer_details: {
            customer_id: "132",
            customer_name: "sainath",
            customer_email: "sainath@gab.com",
            customer_phone: "+919010995323",
          },
        }
      );

      if (res.data && res.data.payment_session_id) {
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      let res = await axios.post(
        "https://payment-gateway-integration.onrender.com/verify",
        { orderId }
      );

      if (res && res.data) {
        console.log(res.data)
      }

      // res.data.map((each)=>{

      //   if(each.payment_status=="SUCCESS"){
      //     alert("payment is  successfull")
      //     setcardProducts([]);
      //     Swal.fire({
      //       text: "payment is  successfully",
      //       icon: "success",

      //     });
      //   }
      //   else if(each.payment_status=="NOT_ATTEMPTED"){
      //     alert("payment is not successfull")
      //     setcardProducts(cardProducts);
      //     Swal.fire({
      //       text: "Payment is not successfull!",
      //       icon: "warning",
      //     });
      //   }

      //   })
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let sessionId = await getSessionId();
      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then((res) => {

        // verifyPayment(orderId)
        if (verifyPayment(orderId)) {
          setcardProducts([]);

          Swal.fire({
            text: "Order has been placed successfully",
            icon: "success",
          });
        }
        // else{
        //   setcardProducts(cardProducts);

        //   Swal.fire({
        //     text: "Payment has been cancelled",
        //     icon: "warning",
        //   });
        // }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Add to cart functionality

  const addToCart = (obj) => {
    const res = { ...obj, count: 1, totalprice: Math.round(obj.price) };
    setcardProducts([...cardProducts, res]);
    toast.success("Product added to Cart Successfully!");
  };


  // fetching all products and display in the UI
  const fetchProducts = async () => {
    setproducts(productList);
    setdummyproducts(productList);
  };


  // categroies wise filtering the products
  const productsFilteringCategoryWise = (category) => {
    setproducts(dummyproducts);

    const filterdata = dummyproducts.filter(
      (eachcategiores) => eachcategiores.category == category
    );

    setproducts(filterdata);
  };

  const allCategoriesButton = () => {
    let data = [...productList];
    if (data.length) {
      let result = productList.sort((a, b) => a.id - b.id);
      setproducts(result);
      setdummyproducts(result);
    }
  };


  // sorting the items according to their prize range from low <==> high

  const sortAsc = () => {
    let data = [...products];
    if (data.length > 0) {
      let result = data.sort((a, b) => a.price - b.price);
      setproducts(result);
    }
  };

  const sortDes = () => {
    let data = [...products];
    if (data.length > 0) {
      let result = data.sort((a, b) => b.price - a.price);
      setproducts(result);
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

  // search functionality in prodcuts page

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
      }
    }
  };


  // Products quantity increment and decrement
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

  // remove the prodcuts from cart
  const deleteProduct = (data) => {
    const filterdata = cardProducts.filter((each, i) => each.id !== data);
    setcardProducts(filterdata);
  };


  // Calcuating the overall price
  const totalStoreAllprice = cardProducts.map((each, i) => {
    return Math.round(each.totalprice);
  });

  const calculate = (accumulator, element) => accumulator + element;
  const totalpricefun = totalStoreAllprice.reduce(calculate, 0);

  let percentage = totalpricefun * 0.08;
  const checkout = totalpricefun + Math.round(percentage) + 150;

  return (
    <>
      <passdata.Provider
        value={{
          userAction,
          deleteProduct,
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
          handleClick,

          searchvalue,
          sortValue,
          productList,
          products,
          dummyproducts,
          cardProducts,
          checkout,
          totalpricefun,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/Products" Component={Collections} />
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
