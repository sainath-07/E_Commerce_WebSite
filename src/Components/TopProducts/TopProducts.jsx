import { FaStar } from "react-icons/fa6"
import topProducts from "./Topproductslist"
import { Link } from "react-router-dom"

const TopProducts=()=>{
    return(
        <>
        <div  >
            <div className=" ps-8 mt-4 ">
                {/* header section */}
                <div className="text-left mb-10">
               <p  className="text-xl font-segoe-ui text-orange-600">Top Related Products</p>
               <h1  className="text-3xl font-bold">Best Products</h1>
               <p  className="text-sm text-gray-400">Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores voluptatem, unde, ut doloremque perferendis perspiciatis iusto des ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
                {/* body section */}
            <div className="grid mx-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center md:px-[10px] lg:px-[0px]  justify-items-center items-center
            ">
                
                {
                    topProducts.map((each,i)=>{
                        return(
                            <div  key={i}
                            className="px-4 rounded-2xl    bg-white dark:bg-gray-800 hover:bg-black/80 mx-auto container  hover:text-white relative shadow-xl duration-300 group max-w-[350px] mt-24"
                            >
                                {/* image section */}
                                <div className="h-[100px]">
                                    <img src={each.img}
                                    className="max-w-[140px]  mx-auto transform -translate-y-20
                                    group-hover:scale-105 duration-200
                                    drop-shadow-md 
                                    "
                                    alt="image" />
                                </div>
                                {/* details section */}

                                <div className="p-4 text-center">
                                    <div className="w-full flex items-center justify-center gap-1">
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        <FaStar className="text-yellow-500"/>
                                        </div>
                                        <h1 className="text-xl font-bold">{each.title}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 tet-sm line-clamp-3">{each.description}</p>

                                        <button 
                                        className="
                                        bg-orange hover:scale-105 duration-300  py-1 px-4 rounded-full mt-4 group-hover:bg-dark
                                        hover:border-2 hover:opacity-75 border-2 border-zinc-600 group-hover:text-red text-dark
                                        ">
                                            
                                            <Link to={'/Collections'}>ShopNow</Link>
                                        </button>

                                </div>

                            </div>
                        )

                    })
                }
            </div>
        </div>
        
        </>
    )
}
export default TopProducts