 import React from 'react';
// import {Tab, Row, Col,Nav,NavItem, NavDropdown, MenuItem, Button, ButtonGroup, DropdownButton} from 'react-bootstrap'



 class Tabs extends React.Component {
   render(){
     return (
    <div className="col-sm-9 col-sm-offset-2">
    	<ul className="nav nav-pills">
	        <li role="presentation"><a href="#">{this.props.tabname1}</a></li>
	        <li role="presentation"><a href="#">{this.props.tabname2}</a></li>
	        <li role="presentation"><a href="#">{this.props.tabname3}</a></li>	        
    	</ul>
    </div>

       )

   }
}

 export default Tabs;

