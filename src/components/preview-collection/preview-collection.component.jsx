import React from 'react';
import './preview-collection.component.scss';
import CollectionItem from '../collection-item/collection-item.component';


const PreviewCollection = (props) => (

    <div className="preview-collection">
        <h1 className="title">{props.collection.title}</h1>
            <div className="preview">
                {
                    props.collection.items.filter((item, i) => i < 4).map(item => (
                        <CollectionItem key={item.id} item = {item} />
                    ))
                }
            </div>
    </div>

);

export default PreviewCollection;