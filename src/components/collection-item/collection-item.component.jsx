import React from 'react';
import './collection-item.component.scss';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = (props) => (

    <div className="collection-item">
        <div className="image"
             style = {{ backgroundImage: `url(${props.item.imageUrl})` }}> 
        </div>
        <div className="collection-footer">
            <span className="name">  { props.item.name } </span>
            <span className="price"> { props.item.price } L.E </span>
        </div>
        <CustomButton onClick={() => props.addItem(props.item)} className="custom-button">ADD TO CART</CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);