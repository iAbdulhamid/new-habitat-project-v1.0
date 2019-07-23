import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-up-in-page/sign-up-in-page.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => { // onSnapshot => like: onAuthStateChanged
          this.setState({ 
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log(this.state));
        })
      } else {
        this.setState({ currentUser: user });
      }
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
