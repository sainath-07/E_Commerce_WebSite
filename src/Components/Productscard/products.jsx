import React from "react"
import { FaStar } from "react-icons/fa6"
import ProductsData from "./ProductsList"

const Products=()=>{
    return(
        <>
        <div className="mt-2">
            <div className="container">
                {/* headersection */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
               <p data-aos="fade-up" className="text-xl font-segoe-ui text-orange-600">Top Selling Products</p>
               <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
               <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
            <div>
                {/* bodysection */}
                <div >
                    <div  className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 rounded  mt-4 px-8">
                        {/* card section */}

                        {
                            ProductsData.map((each,index)=>{
                                return(
                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay={each.aosDelay}
                                    
                                    key={each.id}>
                                        <div className="my-4 "> 
                                            <img src={each.img} className="h-[220px] w-full object-cover rounded-md" alt="" />
                                        <div>
                                            <h3 className="font-semibold">{each.title}</h3>
                                            <p className="text-sm text-gray-600" >{each.color}</p>

                                            <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400"/>
                                              <span>{each.rating}</span>
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Products