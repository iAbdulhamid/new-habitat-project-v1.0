import React from 'react';
import './menu-item.component.scss';


const MenuItem = (props) => (
    // console.log(sections);
        <div className={`${props.section.size} menu-item`}>

            <div style= {{backgroundImage: `url(${props.section.imageUrl})`}} 
                 className="background-image"/>
    
                <div className="content">
                    <h1 className="title">{props.section.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>

            {/* </div> */}

        </div>

    
    

);

export default MenuItem;


