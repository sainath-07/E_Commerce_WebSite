import { Link } from "react-router-dom";

const ViewProducts = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <Link to={"/Products"}>
          <button className="font-segoe-ui font-semibold border-2 border-gray-950 sm:text-sm px-4 p-2 hover:text-white hover:bg-black rounded">
            View Products
          </button>
        </Link>
      </div>
    </>
  );
};

export default ViewProducts;
