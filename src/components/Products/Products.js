
import React from "react";
import PropTypes from "prop-types";
import Product from "../ProdOnCatalogPage/ProdOnCatalogPage";
import "./Products.css"

const Products = ({ products }) => {
  return (
    <div class="products"> {products.map(product => (<Product key={product.id} {...product} />
    ))}
    </div>
  );
};

Products.propTypes = { products: PropTypes.array.isRequired };

export default Products;