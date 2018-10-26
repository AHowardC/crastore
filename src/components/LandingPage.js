import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="jumbotron">
    <h1 className="display-3">Ecommerce Store!</h1>
    <p className="lead">Welcome to Ecommerce store</p>
    <hr className="my-4" />
    <p>
      You can Create, Read, Update and Delete Products. <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
      officia accusantium sunt vitae nostrum nemo magni est sapiente nisi alias
      illum, quas quod modi voluptas quam debitis non! Perspiciatis?
    </p>
    <p className="lead">
      <Link
        to="/products"
        className="btn btn-primary btn-lg"
        href="#"
        role="button"
      >
        View Products
      </Link>
    </p>
  </div>
);

export default LandingPage;
