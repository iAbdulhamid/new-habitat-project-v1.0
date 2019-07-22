import React from 'react';
import './header.component.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/new-habitat-logo.svg';

const Header = (props) => (

    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
            {/* <img src="../../assets/new-habitat-logo.png" alt="" className="logo"/> */}
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="">CONTACT US</Link>
        </div>
    </div>

);

export default Header;
