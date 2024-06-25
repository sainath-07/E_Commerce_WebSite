import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { MdBackspace } from "react-icons/md";
import clsx from "clsx";
import ListItems from "./Listitem";
import { passdata } from "../Navigationstack/navigation";
import { useAuth0 } from "@auth0/auth0-react";
import rightsideimage from "./Rightsideimage/image.png";
import { RiTriangleFill } from "react-icons/ri";

const Header = () => {
  const [isSidemenuopen, setsidemenu] = useState(false);

  const [isimageClick, setisimageclick] = useState(null);
  const [isAuthorised, setisAuthorised] = useState(false);
  const { cardProducts } = useContext(passdata);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(user, "user");

  //  google font Stylings
  const pacificoRegularStyle = {
    fontFamily: '"Pacifico", cursive',
    fontWeight: 600,
    fontStyle: "normal",
    fontSize: "30px",
    textShadow: "4px 0px 3px rgba(0, 0, 0,0.5)",
  };

  const fontbold = {
    fontFamily: "Poppins",
    fontWeight: 600,
  };

  // display login/logout button
  const onimageclick = () => {
    setisimageclick(!isimageClick);
  };

  return (
    <>
      <main className=" shadow-custom-shadow fixed top-0 left-0 bg-white tranparent z-10 w-full">
        <nav className="flex justify-evenly items-center py-2">
          {/* first section */}
          <section className="flex items-center gap-4 ">
            {/* Menu */}
            <FiMenu
              onClick={() => setsidemenu(true)}
              className="md:hidden text-3xl cursor-pointer"
            />

            <p
              style={pacificoRegularStyle}
              className="cursor-pointer text-amber-400 "
            >
              Go shopping
            </p>
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
                    <Link to={"/Products"} style={fontbold}>
                      Products
                    </Link>
                  </p>
                  <p className="text-xl font-semibold font-seogue-ui">
                    <Link to={"/cartpage"} style={fontbold}>
                      CartPage
                    </Link>
                  </p>
                  <p className="text-xl font-semibold font-seogue-ui">
                    <Link to={"/Products"} style={fontbold}>
                      Shop Now
                    </Link>
                  </p>
                  <p className="text-xl font-semibold font-seogue-ui">
                    <Link to={"/Products"} style={fontbold}>
                      Accessories
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* list section in the lg screen */}

          <div
            className={clsx(
              "hidden md:flex md:w-[45%]  items-center justify-center",
              isAuthenticated && "justify-between"
            )}
          >
            <p style={fontbold} className="text-base">
              {isAuthenticated && `Welcome ${user.nickname}👋🏻`}
            </p>

            <ListItems />
          </div>

          {/* Last section */}
          <section className="sm:flex items-center  sm:gap-4 ">
            <button
              className={clsx(
                "hidden sm:flex sm:relative w-full h-[50px] bottom-0  mt-2"
              )}
            >
              <Link to={"/cartpage"}>
                <BsCartPlusFill
                  className={clsx(
                    "text-[150%] mr-4 rounded sm:text-[220%]",
                    isSidemenuopen && "-z-10"
                  )}
                />
              </Link>
              <span className="absolute top-0 right-14 sm:right-10 translate-x-1/2 -translate-y-1/2 mt-2 bg-blue-600 text-white text-sm font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cardProducts.length}
              </span>
            </button>

            <div
              className={clsx(
                "relative  flex items-start flex-col w-10 sm:w-16 ",
                isSidemenuopen && " -z-10"
              )}
            >
              <img
                src={isAuthenticated ? user.picture : rightsideimage}
                className={clsx("cursor-pointer  rounded-full w-full ")}
                onClick={onimageclick}
                title="Click to Login/Logout"
                alt=""
              />

              {isimageClick && (
                <>
                  {isAuthenticated ? (
                    <>
                      <RiTriangleFill className="absolute top-[38px] left-[13px] sm:right-[25px]" />
                      <button
                        onClick={(e) => {
                          logout();
                        }}
                        className="absolute rounded  top-[49px] right-[2px] p-2 bg-stone-900 text-white text-base "
                      >
                        {" "}
                        LogOut
                      </button>
                    </>
                  ) : (
                    <>
                      <RiTriangleFill className="absolute top-[38px] left-[13px] sm:right-[25px]" />
                      <button
                        onClick={(e) => {
                          loginWithRedirect();
                        }}
                        className="absolute rounded  top-[49px] right-[2px] p-2 bg-stone-900 text-white text-base "
                      >
                        {" "}
                        LogIn
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </section>
        </nav>
      </main>
    </>
  );
};

export default Header;
