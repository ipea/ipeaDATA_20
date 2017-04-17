import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <li className="menu-fish">
        
        <h3 className="fish-name">
          {details.name}
          
        </h3>
       
      </li>
    )
  }
}

export default Fish;
