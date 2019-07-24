import React from 'react';
import './cart-dropdown.component.scss';
import CustomButton from '../custom-button/custom-button.component';


const CartDropdown = (props) => (
    <div className="cart-dropdown">
        <div className="cart-items">

        </div>
        <CustomButton>CHECK OUT</CustomButton>
    </div>
);


export default CartDropdown;