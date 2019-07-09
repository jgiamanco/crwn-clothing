import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/jackets' component={JacketsPage} />
        <Route exact path='/shop/sneakers' component={SneakersPage} />
        <Route exact path='/shop/womens' component={WomensPage} />
        <Route exact path='/shop/mens' component={MensPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
