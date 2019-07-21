import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';

import { Switch, Route } from 'react-router-dom';

// const RefrigeratorsPage = () => (
//   <div>
//     <h1>Refrigerators Page !</h1>
//   </div>
// );

function App() {
  return (
    <div>

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
