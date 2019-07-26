import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './collections-overview.component.scss';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectShopCollections } from '../../redux/shop/shop.selectors';



const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(collection => (
                <PreviewCollection key={collection.id} collection={collection} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);