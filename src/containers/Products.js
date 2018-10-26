import React, { Component } from "react";

class Products extends Component {
  state = {
    isLoading: true,
    products: []
  };

  componentDidMount() {
    const API_URL = "http://localhost:5000/api/v1/products";
    fetch(API_URL)
      .then(res => res.json())
      .then(products => {
        console.log(products);
      });
  }
  render() {
    return <h1>Products Page</h1>;
  }
}

export default Products;
