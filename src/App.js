import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-up-in-page/sign-up-in-page.component';

import { auth } from './firebase/firebase.utils';

// const RefrigeratorsPage = () => (
//   <div>
//     <h1>Refrigerators Page !</h1>
//   </div>
// );

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (user => {
      this.setState({ currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
  
        {/* we need the header component to know if there is any logged in user => so he can change 
        SIGNIN word to SIGNOUT */}
        <Header currentUser = { this.state.currentUser } />
  
  
        {/* Switch => first Route match wins ... */}
        <Switch> 
  
          <Route exact path = "/" component = { HomePage } />
          {/* <Route path = "/Refrigerators" component = { RefrigeratorsPage } /> */}
          <Route path = "/shop" component = {ShopPage} />        
          <Route path = "/signIn" component = {SignInAndUpPage} />
        </Switch>
  
      </div>
    );
  }
  
}

export default App;
