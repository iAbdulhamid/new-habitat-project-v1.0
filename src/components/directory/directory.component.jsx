import React from 'react';
import './directory.component.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {

    constructor(){
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Refrigerators',
                    imageUrl: 'https://hamrokitchen.com/wp-content/uploads/2017/09/refrigerators.jpg?b09e47'
                },
                {
                    id: 2,
                    title: 'Gas Cookers',
                    imageUrl: 'https://i.ebayimg.com/00/s/MTAyNFg3Njg=/z/U~UAAOSw57BbSh4o/$_86.JPG'
                },
                {
                    id: 3,
                    title: 'Microwaves',
                    imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3901/3901007cv18d.jpg'
                },
                {
                    id: 4,
                    title: 'Air-Conditioners',
                    imageUrl: 'https://www.lg.com/my/images/home-air-conditioners/bs-q246cxa2/gallery/standard-inverter-v_large_01.jpg',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'Fans',
                    imageUrl: 'https://4.imimg.com/data4/RJ/VR/ANDROID-12021088/product-500x500.jpeg',
                    size: 'large'
                }
            ]
        };
    }

    render () {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(section => (
                        <MenuItem key={section.id} section={section}/>
                    ))
                }
            </div>
        )
    }
}






export default Directory;