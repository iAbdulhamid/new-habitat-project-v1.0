import React from 'react';
import './header.component.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/new-habitat-logo.svg';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hidden }) => (

    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
            {/* <img src="../../assets/new-habitat-logo.png" alt="" className="logo"/> */}
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="">CONTACT US</Link>
            {
                currentUser 
                ?
                <div className="option" onClick = { () => auth.signOut() }> {currentUser.displayName} &nbsp; <i className="fa fa-sign-out" style={{fontSize: '24px'}}></i></div>
                :
                <Link className="option" to="/signIn">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>

);

// when we need to pass more than one (multi) selectors => createStructuredSelector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
