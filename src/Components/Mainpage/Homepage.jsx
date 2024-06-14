import React from "react";
import HeroComponent from "../Hero/hero";
import Header from "../Navbar/header";
import Products from "../Productscard/products";
import ViewProducts from "../ViewProductsButton/viewproducts";
import Aos from "aos";
import "aos/dist/aos.css"
import TopProducts from "../TopProducts/TopProducts";
import Bannerpage from "../Bannersection/banner";
import Testimonal from "../Testimonal/testimonal";
import Footer from "../Footer/footer";

export default function HomePage() {

  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:500,
      easing : "ease-in-sine",
      delay:100
    });
    Aos.refresh();
  },[])
  return (
   <>
   <Header/>
   <HeroComponent/>
   <ViewProducts/>
   <Products/>
   <TopProducts/>
   <Bannerpage/>
   <Testimonal/>
   <Footer/>
   </>
  )
}
