import React from 'react';
import './collection-item.component.scss';

const CollectionItem = (props) => (

    <div className="collection-item">
        <div className="image"
             style = {{ backgroundImage: `url(${props.item.imageUrl})` }}> 
        </div>
        <div className="collection-footer">
            <span className="name">  { props.item.name } </span>
            <span className="price"> { props.item.price } L.E </span>
        </div>
    </div>
);

export default CollectionItem;