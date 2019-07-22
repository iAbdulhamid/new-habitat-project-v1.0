import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';

// const RefrigeratorsPage = () => (
//   <div>
//     <h1>Refrigerators Page !</h1>
//   </div>
// );

function App() {
  return (
    <div>

      <Header></Header>

      {/* Switch => first Route match wins ... */}
      <Switch> 

        <Route exact path = "/" component = { HomePage } />
        {/* <Route path = "/Refrigerators" component = { RefrigeratorsPage } /> */}
        <Route path = "/shop" component = {ShopPage} />        
      </Switch>

    </div>
  );
}

export default App;
