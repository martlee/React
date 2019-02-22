import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import AboutPage from "./components/AboutPage/AboutPage";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HomePage from "./components/HomePage/HomePage";

import './App.css';

class App extends Component {
  render() {
    return (
     <Router>
     
      <div>
        
       <Menu />
       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route path="/about" component={AboutPage} />
       <Route path="/catalog" component={CatalogPage} />
       <Route path="/" component={HomePage} />
       <Route render={() => <h1>Page not found:(mm </h1>} />
      </Switch>
       <Footer/>  
     </div>
         
  </Router>    


  
    );
  }
}

export default App;
