import { FiMenu } from "react-icons/fi";
import { ImageNav } from "./image";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { MdBackspace } from "react-icons/md";
import clsx from "clsx";
import ListItems from "./Listitem";
import { passdata } from "../Navigationstack/navigation";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [isSidemenuopen, setsidemenu] = useState(false);
  const { cardProducts } = useContext(passdata);
  // const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <main className="shadow-custom-shadow fixed top-0 left-0 bg-white border-2 z-10 w-full">
        <nav className="flex justify-evenly items-center py-2">
          {/* first section */}
          <section className="flex items-center gap-4 ">
            {/* Menu */}
            <FiMenu
              onClick={() => setsidemenu(true)}
              className="md:hidden text-3xl cursor-pointer"
            />
            {/* Logo */}
            <Link to={"/"}>
              <ImageNav />
            </Link>
          </section>

          {/* side bar for mobile screen List section */}
          <div
            className={clsx(
              "fixed w-screen lg:hidden h-full backdrop-blur-sm top-0 left-0 -translate-x-full transition-all",
              isSidemenuopen && "translate-x-0"
            )}
          >
            <section className="absolute top-0 left-0 text-black flex flex-col h-full bg-orange-400 mt-0 py-2 z-10 w-56 gap-4 ">
              <MdBackspace 
                onClick={() => setsidemenu(false)}
                className="text-4xl mt-2 ml-8 cursor-pointer "
              />
              <div className="h-[70%] flex flex-col justify-between items-center">
                <div className="w-full h-full flex flex-col justify-around items-center">
               
                  <p className="text-xl font-semibold font-seogue-ui">
                    <Link to={"/Products"}>Products</Link>
                  </p>
                  <p className="text-xl font-semibold font-seogue-ui">
                    <Link to={"/cartpage"}>CartPage</Link>
                  </p>
                  <p className="text-xl font-semibold font-seogue-ui">
                    <Link to={"/contacts"}>Contacts</Link>
                  </p>
                  <p className="text-xl font-semibold font-seogue-ui">
                    <Link to={"/accessories"}>Accessories</Link>
                  </p>
                
                </div>
            
              </div>
            </section>
          </div>

          {/* list section in the lg screen */}

          <div className="hidden md:flex md:w-[60%]  items-center justify-evenly">
      


            <ListItems />
         
          </div>

          {/* Last section */}
          <section className="sm:flex items-center sm:gap-12">
            <button
              className={clsx(
                "hidden sm:flex sm:relative w-full h-[50px] bottom-0  mt-2",
            
              )}
            >
              <Link to={'/cartpage'}>
              <BsCartPlusFill
                className={clsx(
                  "text-[150%] mr-4 rounded sm:text-[220%]",
                  isSidemenuopen && "-z-10"
                )}
              />
              </Link>
              <span className="absolute top-0 right-4 translate-x-1/2 -translate-y-1/2 mt-2 bg-blue-600 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cardProducts.length}
              </span>
            </button>




      
          </section>
        </nav>
      </main>
    </>
  );
};

export default Header;
