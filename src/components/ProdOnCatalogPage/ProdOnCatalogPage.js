import React from "react";
import PropTypes from "prop-types";
import Styles from "./ProdOnCatalogPage.css";

const Product = ({ name, image, amount }) => {
  return (
    <div class="product">
      <img class="productimg" src={image} alt={name} />
      <p class="productprice">${amount}</p>
      <h3>{name}</h3>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default Product;