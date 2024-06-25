import React from "react";
import { Link } from "react-router-dom";

const ListItems = () => {
  const ListItems = [
    {
      label: "Products",
      link: "Products",
    },
  ];
  const fontbold = {
    fontFamily: "Poppins",
  };
  return (
    <>
      {ListItems.map((obj, index) => {
        return (
          <React.Fragment key={index}>
            <ul>
              <li>
                <Link
                  className="font-bold flex  md:text-sm
                      lg:text-[20px]   border-red-500
              sm:hover:border-b-4
                      "
                  style={fontbold}
                  to={obj.link}
                >
                  {obj.label}
                </Link>
              </li>
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ListItems;
