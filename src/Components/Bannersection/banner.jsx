import { GrSecure } from 'react-icons/gr';
import img1 from './image.png'
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Bannerpage=()=>{
    return(
        <>
        <div
        data-aos="fade-up"
         style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
         }}
        className="grid grid-cols-1 mt-12 mb-4 p-2 sm:grid-cols-2 mx-2 rounded-lg bg-gray-400">
            {/* image section */}
            <div className="w-full px-2  sm:p-0 flex justify-center items-center  my-8 sm:m-0 h-full" 
           
            >
                <img src={img1}  data-aos="fade-up" style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }} className='w-[300px] sm:w-[90%]  sm:h-[75%]  lg:w-[85%] lg:h-[95%] border-2 mx-auto rounded-lg h-full' alt="" />
            </div>
            {/* content section */}
            <div data-aos="fade-up" className="flex flex-col   sm:items-center   sm:m-0 gap-2 items-start  mt-12 mb-2">
                <h1 className='w-full flex justify-center font-bold text-4xl md:text-2xl xl:text-5xl'>Summer Sale Up To 50% Off</h1>
                <p className='px-4 font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos assumenda, fugit facere cum id quos minus eaque quasi. Saepe ad sunt in </p>

                <ul className=' flex flex-col w-full gap-4 '>
                    <li className='flex  items-center gap-4'>
                        <GrSecure className='text-4xl inline rounded-full bg-violet-400 size-10 p-2'/>
                        <span className='sm:text-xl sm:font-medium'>Quality Products</span>
                    </li>
                    <li className='flex items-center gap-4'>
                        <IoFastFood className='text-4xl inline rounded-full bg-red-400 size-10 p-2'/>
                        <span  className='sm:text-xl sm:font-medium'>Fast Delivery</span>
                    </li>
                    <li className='flex items-center gap-4'>
                        <GiFoodTruck className='text-4xl inline rounded-full bg-gray-400 size-10 p-2'/>
                        <span  className='sm:text-xl sm:font-medium'>Easy Payment Method</span>
                    </li>
                    <li className='flex items-center gap-4'>
                        <GrSecure className='text-4xl inline rounded-full bg-green-400 size-10 p-2'/>
                        <span  className='sm:text-xl sm:font-medium'>Get Offers</span>
                    </li>
                </ul>
            
            </div>
        </div>
        </>
    )
}

export default Bannerpage;