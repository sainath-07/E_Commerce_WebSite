import { GoMoveToTop } from "react-icons/go"

const HeroComponent=()=>{

    return(
        
        <>
      <div className="mt-20 md:mt-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 max-h-[1200px] overflow-hidden gap-2">
        <div data-aos="fade-up" className="h-[90%] mt-4 px-4">
            <img className="h-[100%] w-[100%] rounded" 
            src="https://images.pexels.com/photos/3985084/pexels-photo-3985084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="" />
            </div>      
        <div data-aos="fade-up" className="h-[100%]  grid grid-cols-2 gap-4 p-4 overflow-hidden px-4">
            <div className=" h-[100%] ">
            <img className="h-[100%] w-[100%] rounded" src="https://images.pexels.com/photos/5650052/pexels-photo-5650052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className=" h-[100%] ">
            <img className="h-[100%] w-[100%] rounded" src="https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className=" h-[100%] ">
            <img className="h-[100%] w-[100%] rounded" src="https://images.pexels.com/photos/5869606/pexels-photo-5869606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className=" h-[100%] ">
            <img className="h-[100%] w-[100%] rounded" src="https://images.pexels.com/photos/1488454/pexels-photo-1488454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            </div> 

      </div>
      <div className="fixed left-0 top-[400px] w-[40px] sm:w-[50px] bg-black rounded-r-lg z-10 h-[42px]">
    <a href="#" className="w-full h-full text-center sm:ml-2  mt-2 text-xl text-white absolute "><GoMoveToTop className="text-3xl" />
    </a>
</div>
        </>
    )

}
export default HeroComponent