import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
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
