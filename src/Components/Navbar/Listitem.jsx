import React from "react";
import { Link, useLocation } from "react-router-dom";


 const ListItems=()=>{



    const ListItems = [
        {
          label: "Collections",
          link: "Collections",
        },
        {
          label: "Men's wear",
          link: "men",
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
                      <Link  to={obj.link} >
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