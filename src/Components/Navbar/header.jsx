import { FiMenu } from "react-icons/fi";
import { ImageNav } from "./image";
import { Link} from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import React, { useState } from "react";
import { MdBackspace } from "react-icons/md";
import clsx from "clsx";
import ListItems from "./Listitem";


const Header = () => {
  const [isSidemenuopen, setsidemenu] = useState(false);



  return (
    <>

      <main  className="shadow-custom-shadow border-2" >
        <nav className="flex justify-between px-6 items-center py-2">
          {/* first section */}
          <section className="flex items-center gap-4 ">
            {/* Menu */}
            <FiMenu
              onClick={() => setsidemenu(true)}
              className="md:hidden text-3xl cursor-pointer"
            />
            {/* Logo */}
            <Link to={"/"} className="text-4xl">
              <ImageNav />
            </Link>
          </section>

          {/* side bar for mobile screen List section */}

          <div
            className={clsx(
              "fixed h-screen w-screen lg:hidden  backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
              isSidemenuopen && "translate-x-0"
            )}
          >
            <section className="top-0 left-0 text-black flex flex-col h-screen absolute bg-orange-400 px-8 mt-0 py-2 z-50 w-56 gap-8 ">
              <MdBackspace
                onClick={() => setsidemenu(false)}
                className="text-2xl 
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
            {/* cart icons */}
            <BsCartPlusFill className="text-[48px]  mx-4  rounded  sm:text-[200%]"/>

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
