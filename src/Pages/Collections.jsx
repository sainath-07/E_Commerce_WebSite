import { Component } from "react";
import axios from "axios";
import ProductsList from "./Categories/products";
import { BarLoader } from 'react-spinners';
import "./index.css";

class Collections extends Component {
  state = {
    products: [],
    dummyproducts: [],
    categories: [],
    loading: true,
  };

  componentDidMount() {
    this.eachcategories();
    this.useraction();
    this.allcategories();
  }

  eachcategories = async () => {
    let categoriesdata = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    this.setState({
      categories: categoriesdata.data,
    });
  };

  useraction = async () => {
    let cards = await axios.get(`https://fakestoreapi.com/products`);
    this.setState({
      dummyproducts: cards.data,
      products: cards.data,
      loading: false,
    });
  };

  allcategories = async () => {
    let cards = await axios.get(`https://fakestoreapi.com/products`);
    this.setState({
      dummyproducts: cards.data,
      products: cards.data,
      loading: false,
    });
  };

  userdata = async (select) => {
    this.setState({
      products: this.state.dummyproducts,
      loading: true,
    });

    const filterdata = this.state.dummyproducts.filter(
      (eachcategiores) => eachcategiores.category === select
    );
    this.setState({
      products: filterdata,
      loading: false,
    });
  };

  render() {
    const { categories, products, loading } = this.state;

    return (
      <>
        <div className="category-buttons-container mt-4 flex justify-center bg-red-600 rounded mx-5 py-2 gap-4">
          {categories.map((each, index) => (
            <button
              key={index}
              className="button bg-yellow-500 rounded p-2"
              onClick={() => this.userdata(each)}
            >
              {each}
            </button>
          ))}
          <button
            className="button bg-yellow-500 rounded p-2"
            onClick={this.allcategories}
          >
            All categories
          </button>
        </div>

        <div className="products-container flex mt-5 justify-center gap-4 flex-wrap">
          {loading ? (
            <div className="loader-container flex justify-center items-center h-screen">
              <BarLoader color="#36d7b7" />
            </div>
          ) : (
            products.map((eachobject, index) => (
              <ProductsList list={eachobject} key={index} />
            ))
          )}
        </div>
      </>
    );
  }
}

export default Collections;
