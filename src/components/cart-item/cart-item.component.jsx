import React from 'react';
import './cart-item.component.scss';

const CartItem = ({item}) => (
    <div className="cart-item">
        <img src={item.imageUrl} alt="item"/>
        <div className="item-details">
            <span className="name">{item.name.split(',')[0]}</span>
            <span className="price">{item.quantity} X {item.price} L.E</span>
        </div>
    </div>
);

export default CartItem;