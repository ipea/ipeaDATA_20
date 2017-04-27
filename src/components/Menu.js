 import React from 'react';
 import '../css/dashboard.css';
// import {Clearfix, MenuItem} from 'react-bootstrap'

// function onSelectAlert(eventKey) {
//   alert(`Alert from menu item.\neventKey: ${eventKey}`);
// }

 class Menu extends React.Component {
 	render(){
 		return (
<div className="menucolor">
    <div className="container-fluid">
      <div className="row">
        <div className={"col-sm-3 col-md-2 sidebar " + this.props.menubackcolor}>
          <ul className={"nav " + this.props.menucolor}>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname} <span className="sr-only">(current)</span></a></li>
          </ul>
          <ul className={"nav " + this.props.other}>
          <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname1} <span className="sr-only"></span></a></li>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname2} <span className="sr-only"></span></a></li>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname3} <span className="sr-only"></span></a></li>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname4} <span className="sr-only"></span></a></li>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname5} <span className="sr-only"></span></a></li>
            <li className="active"><a href={this.props.link6}>{this.props.menuname6} <span className="sr-only"></span></a></li>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname7} <span className="sr-only"></span></a></li>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname8} <span className="sr-only"></span></a></li>
            <li className="active"><a href={'/' + this.props.menuname}>{this.props.menuname9} <span className="sr-only"></span></a></li>

          </ul>
        </div>
            </div>
      </div>
 </div>


 		)


 	}
 }

 export default Menu;

