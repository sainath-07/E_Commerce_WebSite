import React from "react"

const ButtonCategories=({children,handleaction,allCategoriesButton})=>{   
    return(
        <>
        <div className="hidden sm:flex justify-center gap-2">
        {
            children.map((each,i)=>{
                return(
                    <React.Fragment key={i}>
                    <button className="border-2 border-red-900 md:px-2 md:py-1 shadow-custom font-custom font-semibold"
                    onClick={()=>handleaction(each)}
                    >
                        {each}</button>
                        
                    </React.Fragment>
                )
            })
        }
            <button
            className="border-2 border-red-900 px-2 py-1 font-custom font-semibold"
            onClick={allCategoriesButton}
          >
            All categories
          </button>

          </div>
        </>
    )
}
export default ButtonCategories