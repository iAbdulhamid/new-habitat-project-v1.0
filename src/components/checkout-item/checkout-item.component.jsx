import React from 'react';
import './checkout-item.component.scss';

import { connect } from 'react-redux';
import { clearItemFromcart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imageUrl} alt=""/>
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
            {cartItem.quantity}
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{cartItem.price}</span>
        <div className="remove-button" onClick={ () => clearItem(cartItem)}>
            &#10005;
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromcart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);