import { FiMenu } from "react-icons/fi";
import { ImageNav } from "./image";
import { Link} from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { MdBackspace } from "react-icons/md";
import clsx from "clsx";
import ListItems from "./Listitem";
import { passdata } from "../Navigationstack/navigation";




const Header = () => {
  const [isSidemenuopen, setsidemenu] = useState(false);
 const{cardProducts}=useContext(passdata)


  return (
    <>

      <main  className="shadow-custom-shadow fixed top-0 left-0  bg-white border-2  z-10 w-full" >
        <nav className="flex justify-between px-6 items-center py-2">
          {/* first section */}
          <section className="flex items-center gap-4 ">
            {/* Menu */}
            <FiMenu
              onClick={() => setsidemenu(true)}
              className="md:hidden text-3xl cursor-pointer"
            />
            {/* Logo */}
            <Link to={"/"} >
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
            <section className="absolute top-0 left-0 text-black flex flex-col h-full  bg-orange-400 px-8 mt-0 py-2  z-10 w-56 gap-8 ">
              <MdBackspace
                onClick={() => setsidemenu(false)}
                className="text-2xl mt-5
    cursor-pointer"
              />

             <ListItems/>
            </section>
          </div>

          {/* list section in the lg screen */}
          <div className="hidden md:flex w-[50%] justify-between">
          <ListItems/>
          </div>

          {/* Last section */}
          <section className="flex items-center sm:gap-12">
           

            {/* <button className="relative
            
            h-[50px] bottom-2"> */}
            <button className={clsx(
              "  relative w-full h-[50px] bottom-2 mt-2",
              isSidemenuopen && "backdrop-blur -z-10"
            )}>
                <Link
                  to={"/Cartpage"}>
                              <BsCartPlusFill 
                              className={
                                clsx("text-[200%] mr-4 rounded  sm:text-[220%]",
                                  isSidemenuopen && "-z-10"

                                )
                              }
                              
                              
                              />

                </Link>
                <span className="absolute top-0 right-4 translate-x-1/2 -translate-y-1/2 mt-2 bg-blue-600 text-white text-sm font-bold rounded-full h-6  w-6 flex items-center justify-center">
                  {cardProducts.length}
                </span>
              </button>
            {/* avatar img */}
            <img
              src="https://i.pravatar.cc/150?img=15"
              className="h-12 w-12 rounded-full border-2"
              alt="avatar-img"
            />
          </section>
        </nav>
      </main>
    </>
  );
};

export default Header;
