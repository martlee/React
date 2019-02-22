import React from "react";
import "./CatalogPage.css"
import products from "../products.json";
import Manufacturer from "../Manufacturer/Manufacturer";
import Products from "../Products/Products";

class CatalogPage extends React.Component {
    state = {
        searchText: "",
        selManufacturer: "all"
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
        console.log(event.target.value); //co do nasprzyjdzie z text
    };

    clearValues = () => {
        this.setState({ searchText: "", selManufacturer: "all" });

    };


    setManufacturer = event => {
        this.setState({
            selManufacturer: event.target.value
        });
        console.log(event.target.value);///co przyszlo z radio
    };

    getManufacturers() {//wszystkie firmy https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Set
       //https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Spread_operator
        let brands= new Set(products.map(product => product.manufacture).sort());
        return [...brands];
    };
    getProdSearchFilter(searchText) {
        return products.filter(product => product.name.includes(searchText));
    };
    getProdManufacturer(productsList, manufacturer) {
        return productsList.filter(product => product.manufacture.includes(manufacturer));
    };

    render() {
        const { searchText, selManufacturer } = this.state;
        const manufacturers = this.getManufacturers();
        let products = this.getProdSearchFilter(searchText);
        if (selManufacturer !== "all")
            products = this.getProdManufacturer(
                products,
                selManufacturer
            );;

        return (
            <div class="container">
                <h1 class="header-big">Catalog</h1>
                <div class="catalog">
                    <div class="column-left">
                        <div class="filter">
                            <div class="filter-header">
                                <h4>Search</h4>
                                <a href="#" class="clear"
                                    onClick={this.clearValues}>
                                    Clear</a>
                            </div>

                            <div>
                                <input type="text" placeholder="search..."
                                    value={searchText} onChange={this.handleSearchInput} />

                            </div>
                            <h4>Manufacturer</h4>
                            <div>
                                <input type="radio" name="manufacturere" id="all" value="all"
                                    checked={selManufacturer === "all"}
                                    onChange={this.setManufacturer} />
                                <label htmlFor="all">All</label>
                            </div>

                            {manufacturers.map(item => (
                                <Manufacturer key={item} item={item}
                                    isSelected={item === selManufacturer}
                                    onManufacturerChange={this.setManufacturer}
                                />))
                            }
                        </div>
                    </div>

                    <div class="column-right">

                        <Products products={products} />


                    </div>
                </div>
            </div>



        )
    }
}
//     "name": "iMac 27 Retina",
//     "image": "https://i.imgur.com/s7zey8T.jpg",
//     "manufacture": "Apple",
//     "amount": "2099.99",
//     "category": "desktop",
//     "featured": true


export default CatalogPage;
//Katalog: /catalog Lewa kolumna umożliwiająca filtrowanie produktów po nazwie i producencie.
// Przycisk Clear czyści zastosowane filtry i wyświetla wszystkie produkty.
//Prawa kolumna wyświetla listę produktów w zależności od ustawień lewej kolumny.
//Do pobierania danych możesz wykorzystać MoviesService z poprzednich ćwiczeń.
// getManufacturers= radios => {
//     radios = [...new Set(products.map(product => product.manufacture).sort())];
//   }