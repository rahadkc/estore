import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Logout from './components/logout';
import NavBar from './components/navBar';
import ShoppingCart from './features/cart';
import LoginForm from './features/login/index';
import ProductList from './features/products';
import ProductAddForm from './features/products/ProductAddForm';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path={'/'} render={() => {
              return <Redirect to={'/products'} />
            }} />
            <Route exact path={'/products'} component={ProductList} />
            <Route exact path={'/cart'} component={ShoppingCart} />
            <Route exact path={'/login'} component={LoginForm} />
            <Route exact path={'/logout'} component={Logout} />
            <Route exact path={'/product/add'} component={ProductAddForm} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
