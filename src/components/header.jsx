import { VLogo, WebSiteLogo, newlogo } from "../assests";

const Header = () => {
  return (
    <div className="w-full h-25 bg-white border-b-[2px] border-b-gray-600">
        <div className="max-w-screen-xl h-full mx-auto flex justify-center items-center">
      <div>
        <img src={WebSiteLogo}  className="w-18 sm:w-36 md:w-24 lg:w-28 xl:w-32 2xl:w-36 rounded-full" alt="WebSiteLogo"  />
      </div>
       
      <div >
             <ul        className="flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">

                <li>Home</li>
                <li>Pages</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>settings</li>
                
             </ul>
      </div>
      </div>
    </div>
  );
};

export default Header;
