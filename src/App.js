import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndUpPage from './pages/sign-up-in-page/sign-up-in-page.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged (async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => { // onSnapshot => like: onAuthStateChanged
            this.props.setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
      } else {
        this.props.setCurrentUser(user);
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
        {/* <Header currentUser = { this.state.currentUser } /> */}
  
        <Header />

        {/* Switch => first Route match wins ... */}
        <Switch> 
          <Route exact path = "/" component = { HomePage } />
          {/* <Route path = "/Refrigerators" component = { RefrigeratorsPage } /> */}
          <Route path = "/shop" component = {ShopPage} />        
          <Route exact path = "/checkout" component = {CheckoutPage} />        
          <Route exact path = "/signIn" 
          render = { () => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndUpPage />) } />
        </Switch>
  
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
