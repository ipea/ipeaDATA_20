 import React from 'react';
// import {Clearfix, MenuItem} from 'react-bootstrap'

// function onSelectAlert(eventKey) {
//   alert(`Alert from menu item.\neventKey: ${eventKey}`);
// }

 class Menu extends React.Component {
 	render(){
 		return (
<div>
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className="nav nav-sidebar">
            <li className="active"><a href="index.html">{this.props.menuname} <span className="sr-only">(current)</span></a></li>
            
          </ul>
        </div>
            </div>
      </div>
 </div>


 		)


 	}
 }

 export default Menu;

