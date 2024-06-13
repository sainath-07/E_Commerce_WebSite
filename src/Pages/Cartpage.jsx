import React, { useContext } from "react";
import { passdata } from "../Components/Navigationstack/navigation";

const Cartpage = () => {
  const { cardProducts,setcardProducts } = useContext(passdata);

  console.log(cardProducts, "cardProducts");

  const userAction=(action,index)=>{
   switch(action){
         case "INCREMENT" :
            const countIncrease=cardProducts.map((each,i)=>{
               if(each.id===index){
                   each.count++
                   each.totalprice=each.count*each.price
                   return each
               }
               else{
                      return each
               }
            })
            
            setcardProducts(countIncrease)
            
            break
            
            case "DECREMENT" :
               const countdecrease=cardProducts.map((each,i)=>{
                  if(each.id===index && each.count>1){
                     each.count--
                     each.totalprice=each.count*each.price
                     return each
                     }
                     else{
                        return each
                        }
                        })
                     setcardProducts(countdecrease)
   }


   }
      const deleteProduct=(data)=>{
   
         const filterdata=cardProducts.filter((each,i)=>each.id!==data)
   
         setcardProducts(filterdata)
   
      }

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5">Cart Page</h1>

      {/* Responsive grid layout for cart items */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {cardProducts.map((each, index) => {
          const { title, price, Brand, totalprice, image ,count,id} = each;
          return (
            <div
              key={index}
              className="flex md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border-2"
            >
              <img
                src={image}
                className="w-full h-[150px] sm:h-42 md:w-48 object-contain"
                alt={title}
              />
              <div className="p-4 flex flex-col justify-start  grid-flow-col w-full">
                <div>
                  {/* <h1 className="text-lg font-bold">{title}</h1> */}
                  <p className="text-sm font-semibold text-gray-600">Brand: {Brand}</p>
                  <p className="text-gray-800 font-bold mt-2">Price: ${Math.round(price)}</p>

                  <span className="mt-12 font-bold">quantity :{count}</span>

                  <button onClick={()=>userAction("INCREMENT",id)} className="border-2 w-12 ml-6 mt-4">+</button>
                  <button  onClick={()=>userAction("DECREMENT",id)}  className="border-2 w-12">-</button>
                  <p className="text-gray-800 font-bold mt-2">totalprice: ${Math.round(totalprice)}</p>
                </div>
                <button className="mt-4 bg-red-500 text-white
                 py-1 rounded w-[65%] hover:bg-red-600"
                 
                 onClick={()=>deleteProduct(id)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cartpage;
