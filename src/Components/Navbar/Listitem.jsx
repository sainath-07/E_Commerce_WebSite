import React from "react";
import { Link, useLocation } from "react-router-dom";


 const ListItems=()=>{



    const ListItems = [
        {
          label: "Products",
          link: "Products",
        },

        {
          label: "Cartpage",
          link: "Cartpage",
        },

      ];
    return(
        <>
         {ListItems.map((obj, index) => {
                return (
                  <React.Fragment key={index}>
                  <ul 
                  >
                    <li>
                      <Link className="font-bold md:text-base text-gray-500
                      lg:text-[20px] 
                      " to={obj.link} >
                        {obj.label}
                      </Link>
                    </li>
                  </ul>
                </React.Fragment>
                );
              })}</>

    )
}

export default ListItems