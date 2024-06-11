const ProductsList = ({ list }) => {
    const { category, id, image, title, price, rating: { rate } } = list;
    return (
      <div className="product-card category  rounded   pb-3">
        <div className="image-container flex justify-center items-center h-64">
          <img src={image}  alt={title} className="product-image p-5  w-50 " />
        </div>
        <div className="product-info px-4">
          <p className="category-label border border-green-600 text-center mt-2 py-2 mx-5 bg-gray-800 text-white rounded">
            {category}
          </p>
          <div className="flex gap-3 justify-center">
            <button type="button" className="btn bg-green-500 text-white  px-2 rounded">{`Price: $${price}`}</button>
            <button type="button" className="btn bg-green-500 text-white  px-2 rounded">{`Rating: ${rate}`}</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductsList;
  