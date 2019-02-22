import React from "react";
import "./HomePage.css"
import products from "../products.json";
import Post from "../PostOnHomePage/PostOnHomePage";

const productsGood = products.filter(product => (product.featured = "true"));//same dobre
const goodDesktops = productsGood.filter(product => product.category === "desktop"); //dobre i desktopy
const goodTablets = productsGood.filter(product => product.category === "tablet"); //dobre i desktopy
const goodDesktops2 = goodDesktops.slice(0, 4);
const goodTablets2 = goodTablets.slice(0, 4);

const HomePage = () => (
    <div class="container">
        <h1 class="header-big">Welcome to our store</h1>

        <h2 class="header-small">Desktops</h2>
        <div class="products">
            {goodDesktops2.map(({ name, amount, image, featured, category }) => (
                <div class="product">
                    <div class="productimg"><Post image={image} />  </div>
                    <div class="productprice"> <Post amount={"$" + amount} /> </div>
                    <h3><Post name={name} /> </h3>
                </div>

            ))}
        </div>

        <h2 class="header-small">Tablets </h2>
        <div class="products">
            {goodTablets2.map(({ name, amount, image, featured, category }) => (
                <div class="product">
                    <div class="productimg"><Post image={image} />  </div>
                    <div class="productprice"> <Post amount={"$" + amount} /> </div>
                    <h3><Post name={name} /> </h3>
                </div>

            ))}
        </div>
    </div>
)

export default HomePage;
