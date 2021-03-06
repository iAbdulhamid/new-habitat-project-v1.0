import React from 'react';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.component.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem  from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>)
                    )
                ) : (
                    <span className="empty-message">No Items in your cart</span>
                )
                
            }
        </div>
        <CustomButton onClick = { () => {
            history.push('/checkout');
            dispatch(toggleCartHidden()); 
            } }>CHECK OUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));