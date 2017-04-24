/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';

import { formatPrice } from '../helpers';


class Fish extends React.Component {
    render() {
        
        const {details} = this.props;
        
        
            return(
                    <li className="menu-fish"><img src={details.image} alt={details.name} />
                        <h3 className="fish-name">
                            {details.name}
                            <span className="price">{formatPrice(details.price)}</span>
                        </h3>
                        <p>{details.desc}</p>
                        <button>Add To Order</button></li>
                    )
        }
    }

export default Fish;