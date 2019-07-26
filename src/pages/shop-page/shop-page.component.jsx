import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import './shop-page.component.scss';
// import PreviewCollection from '../../components/preview-collection/preview-collection.component';
// import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ collections }) => {
    
        return (
            <div className="shop-page">
                <CollectionsOverview/>
            </div>
        )
}

// const mapStateToProps = createStructuredSelector({
//     collections: selectShopCollections
// })

export default ShopPage;
