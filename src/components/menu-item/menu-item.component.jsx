import React from 'react';
import './menu-item.component.scss';

import { withRouter } from 'react-router-dom';


const MenuItem = (props) => (

        <div className={`${props.section.size} menu-item`}
             onClick={() => props.history.push(`${props.match.url}${props.section.linkUrl}`)}>

            <div style= {{backgroundImage: `url(${props.section.imageUrl})`}} 
                 className="background-image"/>
    
            <div className="content">
                <h1 className="title">{props.section.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>

        </div>  

);

export default withRouter(MenuItem);


