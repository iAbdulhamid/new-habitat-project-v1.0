import React from 'react';
import './checkout.component.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">

        <div className="checkout-header">
            <div className="checkout-block"><span className="title">Product</span></div>
            <div className="checkout-block"><span>Description</span></div>
            <div className="checkout-block"><span>Quantity</span></div>
            <div className="checkout-block"><span>Price</span></div>
            <div className="checkout-block"><span>Remove</span></div>
        </div>
        {
            cartItems.map(item => 
            // <div className="checkout-header">
            //     <div className="checkout-block image"><img src={item.imageUrl} alt=""/></div>
            //     <div className="checkout-block"><span>{item.name}</span></div>
            //     <div className="checkout-block"><span>{item.quantity}</span></div>
            //     <div className="checkout-block"><span>{item.price}</span></div>
            //     <div className="checkout-block"><span>X</span></div>
            // </div>
              <CheckoutItem key={item.id} cartItem={item}/> 
            )
        }
        <div className="total">Total Price: { total } L.E</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);