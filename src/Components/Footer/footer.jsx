import { TiSocialFacebook } from 'react-icons/ti';
import { IoLogoInstagram } from "react-icons/io5";
import { RxTwitterLogo } from "react-icons/rx";
import { LuGithub } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";



const Footer=()=>{
    return(
        <>
        <div className="grid  left-0 grid-cols-1 bg-stone-900 justify-center  sm:grid-cols-3  auto-cols-max  ">


            {/* Short summary 1st column */}
            <div className=" p-4">
            <img  src="https://img.icons8.com/stickers/100/shop-local.png"  alt="shop-local"
            className="inline w-16"
            />

            <span className="text-white font-semibold text-xl">V-Ecommerce</span>
            <p className="text-white line-clamp-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id qui quasi suscipit sed perferendis et nesciunt dolores error assumenda sapiente unde, recusandae corporis accusantium amet commodi enim voluptate fugiat culpa?</p>

            </div>
            {/* links 2nd column */}
            <div className="flex justify-center gap-4 items-center sm:w-full  flex-wrap place-content-center text-white ">
                
                 <p className="text-sm sm:text-base lg:text-xl font-custom">Home</p>
                 <p className="text-sm sm:text-base lg:text-xl font-custom">Company</p>
                 <p className="text-sm sm:text-base lg:text-xl font-custom">Products</p>
                 <p className="text-sm sm:text-base lg:text-xl font-custom">Contact</p>
             
                 
                 
            </div>
            {/* links 3rd column */}
            <div className="flex  sm:w-full justify-center md:px-8 md:gap-6 items-center mx-auto gap-2 p-4 flex-wrap  w-[75%] content-center"
            
            
            >
            <TiSocialFacebook  className="border-2 text-4xl lg:text-5xl p-2 rounded-full" color="#eee"  />
            <IoLogoInstagram   className="border-2  text-4xl lg:text-5xl p-2 rounded-full" color="#eee"  />
            <RxTwitterLogo   className="border-2 text-4xl p-2 lg:text-5xl rounded-full" color="#eee"  />
            <LuGithub   className="border-2 p-2 text-4xl lg:text-5xl rounded-full" color="#eee"  />
            <IoCallOutline   className="border-2  text-4xl lg:text-5xl p-2 rounded-full" color="#eee"  />


            </div>
        </div>
        </>
    )
}

export default Footer