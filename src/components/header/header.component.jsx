import React from 'react';
import './header.component.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/new-habitat-logo.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (

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
        </div>
    </div>

);

export default Header;
