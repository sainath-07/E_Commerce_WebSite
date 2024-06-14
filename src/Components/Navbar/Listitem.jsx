import React from "react";
import { Link, useLocation } from "react-router-dom";


 const ListItems=()=>{


    const { pathname } = useLocation();
  let subpage = pathname.slice(1);

  const Activepage = (type) => {
    let textcolor = "text-lg font-segoe-ui px-4 py-2  inline-flex cursor-pointer";

    if (type.label === subpage) {
      textcolor += " text-white  rounded bg-black border-2 border-black transition-transform ";
    }
    return textcolor;

    // console.log(type.label)
  };

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
          label: "About_us",
          link: "About",
        },

      ];
    return(
        <>
         {ListItems.map((obj, index) => {
                return (
                  <React.Fragment key={index}>
                  <ul 
                  >
                    <li className={Activepage(obj)}>
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